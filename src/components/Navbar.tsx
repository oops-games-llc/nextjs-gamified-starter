import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-5 py-4 border-b border-border bg-glass">
      <Link href="/" className="font-extrabold text-2xl tracking-tight flex items-center gap-1">
        Acme<span className="text-primary">SaaS</span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/login" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
          Log In
        </Link>
        <Link href="/register" className="bg-foreground text-background px-4 py-2 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-transform">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
