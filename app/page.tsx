import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="To'qima materiallar"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(111,78,55,0.6)" }} />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#FAF6F0" }}>
            O'zbekiston to'qima bozori
          </h1>
          <p className="text-xl mb-10 opacity-90" style={{ color: "#FAF6F0" }}>
            Chit mato, atlas, gilam va sitsa — bir platformada. Ulguji narxlarda.
          </p>
          <Link
            href="/katalog"
            className="inline-block px-10 py-4 text-lg font-semibold rounded-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#C8A24B", color: "#FAF6F0" }}
          >
            Katalogni ko'rish
          </Link>
        </div>
      </section>

      {/* Biz haqimizda */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#C8A24B" }}>
            Biz haqimizda
          </p>
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#6F4E37" }}>
            Ishonchli B2B platforma
          </h2>
          <p className="text-lg leading-relaxed mb-4 opacity-80" style={{ color: "#6F4E37" }}>
            LolaMarket — O'zbekistondagi to'qima ishlab chiqaruvchilar va ulgurji xaridorlarni bog'lovchi
            platforma. Biz sifatli mahsulotni eng qulay narxda taklif qilamiz.
          </p>
          <p className="text-lg leading-relaxed opacity-80" style={{ color: "#6F4E37" }}>
            10 yildan ortiq tajriba, 200+ ishlab chiqaruvchi sherik, butun O'zbekiston bo'ylab yetkazib berish.
          </p>
        </div>
        <div className="relative h-80 rounded-sm overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80"
            alt="To'qima ishlab chiqarish"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
