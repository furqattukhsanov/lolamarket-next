import Link from "next/link";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function KatalogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const active = category || "all";

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2" style={{ color: "#6F4E37" }}>
        Katalog
      </h1>
      <p className="text-lg opacity-70 mb-10" style={{ color: "#6F4E37" }}>
        {filtered.length} ta mahsulot topildi
      </p>

      {/* Filtr tugmalari */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = active === cat.value;
          return (
            <Link
              key={cat.value}
              href={cat.value === "all" ? "/katalog" : `/katalog?category=${cat.value}`}
              className="px-5 py-2 rounded-sm text-sm font-semibold border transition-colors"
              style={{
                backgroundColor: isActive ? "#6F4E37" : "transparent",
                color: isActive ? "#FAF6F0" : "#6F4E37",
                borderColor: "#6F4E37",
              }}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>

      {/* Mahsulotlar grid */}
      {filtered.length === 0 ? (
        <p className="text-center py-20 opacity-50" style={{ color: "#6F4E37" }}>
          Mahsulot topilmadi
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
