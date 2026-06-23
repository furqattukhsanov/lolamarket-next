import Link from "next/link";

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
        <Link href="/" style={{ color: "#6F4E37" }} className="text-2xl font-bold tracking-wide">
          LolaMarket
        </Link>
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
