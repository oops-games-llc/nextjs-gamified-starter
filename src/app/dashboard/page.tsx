"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, isFirebaseConfigured, signOut } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      // In QA fallback mode, we don't block the dashboard
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/register');
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    if (isFirebaseConfigured()) {
      await signOut(auth);
    }
    router.push('/');
  };

  if (loading) {
    return <div className="flex-1 flex items-center justify-center">Loading dashboard...</div>;
  }

  return (
    <div className="flex-1 p-8 max-w-6xl mx-auto w-full pt-16">
      <div className="bg-surface border border-border rounded-2xl p-10 mb-8 shadow-xl">
        <h1 className="text-3xl font-extrabold mb-4 tracking-tight">Welcome to your Dashboard</h1>
        <p className="text-muted mb-8 max-w-2xl text-lg">
          You have successfully authenticated using the Next.js Gamified Starter template. Your session is now secure.
        </p>
        
        <div className="bg-success/10 text-success p-5 rounded-xl border border-success/20 inline-flex items-center gap-3 mb-10 font-medium">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Secure human session established
        </div>
        
        <div className="border-t border-border pt-8 mt-4">
          <button 
            onClick={handleLogout}
            className="bg-background border border-border px-8 py-3 rounded-lg hover:bg-border transition-colors font-semibold"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
