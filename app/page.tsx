import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen starfield flex flex-col items-center justify-center gap-8 py-10">
      <Logo size={64} />

      <nav className="flex flex-col items-center gap-4 text-lg tracking-widest uppercase">
        <Link href="/" className="hover:opacity-70">Home</Link>
        <Link href="/catalog" className="hover:opacity-70">Catalog</Link>
        <span className="opacity-40 cursor-default">Contact</span>
      </nav>

      <div className="flex gap-4 mt-6 opacity-60">
        <span>IG</span>
        <span>TT</span>
      </div>
    </main>
  );
}
