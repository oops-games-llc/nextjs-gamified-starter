import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center pt-24 px-5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[100px] -z-10 pointer-events-none" />

      <div className="text-center max-w-4xl w-full">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
          Your Next Big Idea
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Ship Faster.<br />
          <span className="text-gradient">Scale Better.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          The enterprise-grade boilerplate for modern startups. Build your next idea with Next.js 14, TailwindCSS, Firebase Auth, and enterprise bot protection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:-translate-y-0.5 transition-transform text-center shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            Start Free Trial
          </Link>
          <Link href="https://github.com/oops-games-llc/nextjs-gamified-starter" target="_blank" className="bg-transparent border-2 border-foreground text-foreground px-8 py-3 rounded-lg font-semibold hover:-translate-y-0.5 transition-transform text-center">
            View Documentation
          </Link>
        </div>
      </div>

      <div className="mt-32 max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        <div className="bg-surface border border-border p-8 rounded-2xl">
          <h3 className="font-bold text-xl mb-3">Instant Authentication</h3>
          <p className="text-muted text-sm leading-relaxed">Firebase Auth pre-configured. Get your users securely signed in with zero backend setup required.</p>
        </div>
        <div className="bg-surface border border-border p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="font-bold text-xl mb-3 relative z-10">Premium Aesthetics</h3>
          <p className="text-muted text-sm leading-relaxed relative z-10">Built with Tailwind v4. Features modern glassmorphism, dynamic gradients, and perfect typography out of the box.</p>
        </div>
        <div className="bg-surface border border-border p-8 rounded-2xl">
          <h3 className="font-bold text-xl mb-3">Bot Protected by Default</h3>
          <p className="text-muted text-sm leading-relaxed">Next-generation gamified CAPTCHA integrated natively into the signup flow. Stop spam, delight users.</p>
        </div>
      </div>
    </main>
  );
}
