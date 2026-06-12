"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, signInWithEmailAndPassword, isFirebaseConfigured } from '@/lib/firebase';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!isFirebaseConfigured()) {
        console.warn('Firebase not configured. Mock login successful.');
        await new Promise(r => setTimeout(r, 800));
        router.push('/dashboard');
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-5 pt-16 pb-24">
      <div className="w-full max-w-md bg-surface border border-border p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-muted mb-8 text-sm">Log in to your account.</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {error && <div className="bg-red-500/10 text-red-500 p-3 rounded-lg text-sm border border-red-500/20">{error}</div>}
          
          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground/80">Work Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground/80">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-[0_0_15px_rgba(59,130,246,0.2)] disabled:shadow-none"
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>

          <p className="text-center text-sm text-muted mt-4">
            Don't have an account? <Link href="/register" className="text-primary hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
