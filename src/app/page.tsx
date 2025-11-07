"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { useAuth } from "@/context/auth-context";
import { Loader2 } from "lucide-react";
import { DailyTip } from "@/components/daily-tip";
import SplashScreen from "@/components/splash-screen";


export default function Home() {
  const { loading, user } = useAuth();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Set to true only on the client-side to avoid hydration issues
    setShowSplash(true);
  }, []);


  if (showSplash) {
    return <SplashScreen onFinished={() => setShowSplash(false)} />;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Although this page is public, we re-render key components on auth state change
  // to ensure the header updates correctly when a user logs in or out.
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header />
        <main>
          <DailyTip />
          <div className="text-center my-8">
            <h2 className="font-headline text-3xl font-bold text-gray-800">
              Dairy Information & Calculations
            </h2>
            <p className="font-headline text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              By Saurabh Rajput
            </p>
          </div>
          <TopicGrid />
        </main>
      </div>
    </div>
  );
}
