import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/katalog", label: "Katalog" },
  { href: "/haqimizda", label: "Haqimizda" },
  { href: "/aloqa", label: "Aloqa" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(250, 246, 240, 0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(200, 162, 75, 0.35)",
        boxShadow: "0 2px 24px rgba(111, 78, 55, 0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" style={{ color: "#6F4E37" }} className="flex items-center gap-2 text-2xl font-bold tracking-wide">
          <Image src="/logo.jpg" alt="LolaMarket logo" width={40} height={40} className="rounded-full object-cover" />
          LolaMarket
        </a>
        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "#6F4E37" }}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
