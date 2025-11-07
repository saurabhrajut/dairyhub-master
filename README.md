# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Deploying to Vercel

To deploy this project to Vercel, you need to set up the environment variables.

1.  Go to your Vercel project dashboard.
2.  Navigate to **Settings** > **Environment Variables**.
3.  Add the following variables with their corresponding values from the `.env` file in this project:

    - `NEXT_PUBLIC_FIREBASE_API_KEY`
    - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
    - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
    - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
    - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
    - `NEXT_PUBLIC_FIREBASE_APP_ID`
    - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
    - `GEMINI_API_KEY`

After adding these variables, re-deploy your project.

## Payments (Razorpay)

To enable real payments in production, configure these environment variables in your hosting provider and in a local `.env.local` when testing:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxx

# Firebase (existing)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

Notes:
- Keep `RAZORPAY_KEY_SECRET` server-only. Never expose it to the client.
- The frontend uses `NEXT_PUBLIC_RAZORPAY_KEY_ID` to initialize Razorpay Checkout.
- Payment order creation: `src/app/api/payments/create-order/route.ts`
- Payment verification: `src/app/api/payments/verify/route.ts`
