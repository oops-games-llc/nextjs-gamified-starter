# Conversion.Business SaaS Starter

A premium, production-ready Next.js boilerplate built for developers who want to skip the setup and start building.

## Features
- **Next.js 14 App Router** with TypeScript
- **TailwindCSS** featuring a premium dark-mode, glassmorphic aesthetic
- **Firebase Authentication** (Email & Password)
- **Gamified Bot Protection** out of the box via `react-gamified-captcha`

## Getting Started

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Going to Production

By default, the template runs in a **Graceful Fallback Mode**. You can test the UI, the gamified CAPTCHA, and the mock dashboard instantly without configuring any database keys. 

To take your SaaS to production, you need to configure two things:

### 1. The Database (Firebase)
Create a `.env.local` file in the root directory and add your Firebase project credentials. As soon as these keys are detected, the app automatically switches from Mock Mode to True Authentication.
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_CAPTCHA_SITE_KEY=your_conversion_business_site_key
```

### 2. The Gamified CAPTCHA
The registration page uses a fallback demo site key to demonstrate the gamified bot protection. 
To protect your production application from automated spam and receive valid HMAC signatures, you must generate a free production API key at [Conversion.Business](https://conversion.business) and place it in your `.env.local` file as `NEXT_PUBLIC_CAPTCHA_SITE_KEY`.
