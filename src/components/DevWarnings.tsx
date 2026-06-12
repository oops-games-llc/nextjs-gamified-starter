"use client";

import { useState, useEffect } from 'react';
import { isFirebaseConfigured } from '@/lib/firebase';

export function DevWarnings() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !mounted) {
    return null;
  }

  const missingFirebase = !isFirebaseConfigured();
  const demoCaptcha = !process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY === 'demo_tenant';

  if (!missingFirebase && !demoCaptcha) {
    return null;
  }

  return (
    <div className="w-full flex flex-col">
      {missingFirebase && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/30 text-yellow-200 px-4 py-3 text-center text-sm font-medium z-50">
          <span className="font-bold mr-2">⚠️ Mock Database Mode Active:</span>
          You have not configured your Firebase keys in <code className="bg-black/20 px-1.5 py-0.5 rounded text-xs">.env.local</code>. User accounts are not being saved.
        </div>
      )}
      
      {demoCaptcha && (
        <div className="bg-orange-500/10 border-b border-orange-500/30 text-orange-200 px-4 py-3 text-center text-sm font-medium z-50">
          <span className="font-bold mr-2">⚠️ Demo CAPTCHA Active:</span>
          You are using the demo Site Key. Remember to register at <a href="https://conversion.business" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-100 transition-colors">Conversion.Business</a> for a free production key before launching!
        </div>
      )}
    </div>
  );
}
