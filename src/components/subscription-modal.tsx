
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle2, Zap, Loader2 } from "lucide-react";
import { useSubscription, type SubscriptionPlan } from "@/context/subscription-context";
import { useAuth, type Department } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

declare global {
  interface Window {
    Razorpay?: any;
  }
}


const allProFeatures = [
    "Unlock all premium calculators & guides",
    "Full access to Sarathi AI Chatbot",
    "Access to exclusive industry reports",
    "Save and export your calculations",
    "Ad-free experience",
];

const departmentPlans: Record<string, Record<string, { title: string; price: number; duration: string; popular?: boolean }>> = {
    'process-access': {
        '7-days': { title: "7 Days", price: 19, duration: "Trial Access" },
        '1-month': { title: "1 Month", price: 99, duration: "Full Access" },
        '6-months': { title: "6 Months", price: 299, duration: "Save 45%", popular: true },
        'yearly': { title: "Yearly", price: 549, duration: "Best Value" },
    },
    'production-access': {
        '7-days': { title: "7 Days", price: 49, duration: "Starter Access" },
        '1-month': { title: "1 Month", price: 99, duration: "Full Access" },
        '6-months': { title: "6 Months", price: 399, duration: "Save 33%", popular: true },
        'yearly': { title: "Yearly", price: 749, duration: "Best Value" },
    },
    'quality-access': {
        '7-days': { title: "7 Days", price: 79, duration: "Starter Access" },
        '1-month': { title: "1 Month", price: 149, duration: "Full Access" },
        '6-months': { title: "6 Months", price: 499, duration: "Save 45%", popular: true },
        'yearly': { title: "Yearly", price: 849, duration: "Best Value" },
    },
    'all-control-access': {
        '7-days': { title: "7 Days Ultimate", price: 89, duration: "All Access Pass" },
        '1-month': { title: "1 Month Ultimate", price: 199, duration: "All Access Pass" },
        '6-months': { title: "6 Months Ultimate", price: 499, duration: "Save 58%", popular: true },
        'yearly': { title: "Yearly Ultimate", price: 999, duration: "Best Value" },
        'lifetime': { title: "Lifetime Ultimate", price: 1499, duration: "One-Time Purchase" },
    },
    'guest': {} // Guests can't subscribe
};


export function SubscriptionModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { subscribe } = useSubscription();
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<any | null>(null);
  const [selectedDept, setSelectedDept] = useState<Department>(user?.department && user.department !== 'guest' ? user.department : 'process-access');


  const currentPlans = departmentPlans[selectedDept] || {};

  async function loadRazorpay(): Promise<boolean> {
    if (window.Razorpay) return true;
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  const handleSubscription = async (planKey: any) => {
    try {
      if (!user || !user.uid) {
        toast({
          variant: "destructive",
          title: "Please log in",
          description: "Sign in to purchase a plan.",
        });
        return;
      }
      const plan = currentPlans[planKey];
      if (!plan) return;

      setIsLoading(planKey);

      const loaded = await loadRazorpay();
      if (!loaded) {
        toast({
          variant: "destructive",
          title: "Payment unavailable",
          description: "Failed to load Razorpay. Please try again.",
        });
        setIsLoading(null);
        return;
      }

      const orderRes = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: plan.price, currency: "INR", notes: { planKey, department: selectedDept, userId: user.uid } }),
      });
      const orderJson = await orderRes.json();
      if (!orderRes.ok || !orderJson?.ok) {
        throw new Error(orderJson?.error || "Failed to create order");
      }

      const order = orderJson.order;

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        name: "Dairy Hub Pro",
        description: `${plan.title} - ${getDepartmentName(selectedDept)}`,
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyJson = await verifyRes.json();
            if (!verifyRes.ok || !verifyJson?.ok) {
              throw new Error(verifyJson?.error || "Payment verification failed");
            }

            await subscribe(`${selectedDept}:${planKey}` as SubscriptionPlan, user.uid, verifyJson.paymentId);

            toast({
              title: "Payment successful",
              description: "Your subscription is now active.",
            });
            setIsOpen(false);
          } catch (e: any) {
            toast({ variant: "destructive", title: "Payment failed", description: e?.message || "Could not verify payment" });
          } finally {
            setIsLoading(null);
          }
        },
        prefill: {
          name: user.displayName || user.email?.split("@")[0] || "",
          email: user.email || "",
        },
        theme: { color: "#2563eb" },
      });

      rzp.on("payment.failed", (resp: any) => {
        toast({ variant: "destructive", title: "Payment failed", description: resp?.error?.description || "Payment was not completed." });
        setIsLoading(null);
      });

      rzp.open();
    } catch (err: any) {
      toast({ variant: "destructive", title: "Payment error", description: err?.message || "Unexpected error" });
      setIsLoading(null);
    }
  };

  const getDepartmentName = (deptKey?: Department) => {
    if (!deptKey) return 'Not specified';
    const names: Record<Department, string> = {
        'process-access': 'Process Access',
        'production-access': 'Production Access',
        'quality-access': 'Quality Access',
        'all-control-access': 'All Control Access',
        'guest': 'Guest'
    }
    return names[deptKey];
  }

  const PlanCard = ({ planKey }: { planKey: string }) => {
    const plan = currentPlans[planKey];
    if (!plan) return null;
    const popular = plan.popular || false;
    return (
        <div className={`border bg-white p-5 rounded-xl shadow-sm relative ${popular ? 'border-2 border-primary' : ''}`}>
            {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold shadow">Best Value</div>}
            <h4 className="text-lg font-bold text-center font-headline">{plan.title}</h4>
            <p className="text-center text-muted-foreground text-sm mb-3">{plan.duration}</p>
            <p className="text-4xl font-extrabold text-center text-gray-800 mb-4">
                ₹{plan.price}
            </p>
            <Button onClick={() => handleSubscription(planKey)} className={`w-full ${popular ? 'bg-gradient-to-r from-primary to-indigo-500 text-white shadow-md' : ''}`} variant={popular ? 'default' : 'outline'} disabled={!!isLoading}>
                {isLoading === planKey ? <Loader2 className="animate-spin" /> : 'Choose Plan'}
            </Button>
        </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-full max-h-[90vh] flex flex-col p-0">
        <ScrollArea className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 order-2 md:order-1 flex flex-col">
                  <DialogHeader>
                      <div className="flex justify-center mb-2">
                          <div className="bg-amber-100 p-3 rounded-full">
                              <Crown className="w-8 h-8 text-amber-500" />
                          </div>
                      </div>
                      <DialogTitle className="text-3xl text-center font-extrabold text-gray-800 font-headline">Go Pro!</DialogTitle>
                      <DialogDescription className="text-muted-foreground text-center">
                          Unlock powerful features and support Dairy Hub App development.
                      </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 space-y-3 flex-1">
                      {allProFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                          </div>
                      ))}
                  </div>
                   <div className="mt-8 bg-gray-50 p-4 rounded-lg text-center border">
                      <p className="text-xs text-muted-foreground">Payments are securely processed by Razorpay.</p>
                  </div>
              </div>
              <div className="bg-primary/5 p-8 order-1 md:order-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary font-headline mb-2 text-center">Choose Your Plan</h3>
                  <div className="mb-6">
                      <label htmlFor="dept-select" className="block text-sm font-medium text-gray-700 mb-1 text-center">Select Your Department to See Plans:</label>
                      <Select value={selectedDept} onValueChange={(val) => setSelectedDept(val as Department)} disabled={user?.isAnonymous}>
                          <SelectTrigger id="dept-select" className="w-full max-w-xs mx-auto bg-white">
                              <SelectValue placeholder="Select Department" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="process-access">Process Access</SelectItem>
                              <SelectItem value="production-access">Production Access</SelectItem>
                              <SelectItem value="quality-access">Quality Access</SelectItem>
                              <SelectItem value="all-control-access">All Control Access</SelectItem>
                          </SelectContent>
                      </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.keys(currentPlans).map(planKey => (
                       <PlanCard key={planKey} planKey={planKey} />
                    ))}
                     {Object.keys(currentPlans).length === 0 && (
                        <div className="sm:col-span-2 text-center text-muted-foreground bg-white p-6 rounded-lg">
                            <p>No subscription plans available for Guests.</p>
                            <p className="text-xs mt-2">Please sign up for an account to subscribe.</p>
                        </div>
                     )}
                  </div>
              </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
