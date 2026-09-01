import Link from "next/link";
import Logo from "@/components/Logo";
import { products } from "@/lib/products";

export default function Catalog() {
  return (
    <main className="min-h-screen starfield pb-20">
      <header className="flex justify-center pt-8 pb-4">
        <Link href="/">
          <Logo size={48} />
        </Link>
      </header>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 px-6 max-w-2xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="float-item w-full h-auto"
              style={{ filter: "drop-shadow(0 0 20px rgba(245,240,255,0.5))" }}
            />
            <p className="mt-3 text-sm tracking-wide">{product.name}</p>
            <p className="text-xs opacity-70 mt-1">LE {product.price.toFixed(2)} EGP</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
