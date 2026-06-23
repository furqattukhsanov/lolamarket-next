import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/mahsulot/${product.slug}`} className="group block">
      <div
        className="rounded-sm overflow-hidden border transition-shadow hover:shadow-lg"
        style={{ borderColor: "#C8A24B22", backgroundColor: "#fff" }}
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#C8A24B" }}>
            {product.category.replace("-", " ")}
          </p>
          <h3 className="text-lg font-bold mb-2" style={{ color: "#6F4E37" }}>
            {product.name}
          </h3>
          <p className="text-sm opacity-70 mb-3" style={{ color: "#6F4E37" }}>
            {product.description}
          </p>
          <p className="text-xl font-bold" style={{ color: "#6F4E37" }}>
            {product.price.toLocaleString("uz-UZ")} so'm
            <span className="text-sm font-normal opacity-60"> / {product.unit}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
