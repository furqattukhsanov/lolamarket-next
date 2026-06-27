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
    <header style={{ backgroundColor: "#FAF6F0", borderBottom: "2px solid #C8A24B" }}>
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
