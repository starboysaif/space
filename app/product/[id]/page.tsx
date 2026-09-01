"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { products } from "@/lib/products";

const sizes = ["S", "M", "L"];

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  function handleAddToCart() {
    if (!selectedSize) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }, 900);
  }

  return (
    <main className="min-h-screen starfield pb-20">
      <header className="flex justify-center pt-8 pb-4">
        <Link href="/">
          <Logo size={48} />
        </Link>
      </header>

      <div className="max-w-md mx-auto px-6 flex flex-col items-center text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto mb-6"
          style={{ filter: "drop-shadow(0 0 24px rgba(245,240,255,0.5))" }}
        />

        <h1 className="text-lg tracking-wide">{product.name}</h1>
        <p className="text-sm opacity-70 mt-1 mb-6">LE {product.price.toFixed(2)} EGP</p>

        <p className="text-xs uppercase tracking-widest opacity-60 mb-2 self-start">Size</p>
        <div className="flex gap-3 mb-6 self-start">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 rounded-md border text-sm ${
                selectedSize === size
                  ? "bg-[#f5f0ff] text-[#0d0518] border-[#f5f0ff]"
                  : "border-[#f5f0ff]/40"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {selectedSize && (
          <>
            <p className="text-xs uppercase tracking-widest opacity-60 mb-2 self-start">Quantity</p>
            <div className="flex items-center gap-4 mb-6 self-start">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 border border-[#f5f0ff]/40 rounded-md"
              >
                -
              </button>
              <span>{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 border border-[#f5f0ff]/40 rounded-md"
              >
                +
              </button>
            </div>
          </>
        )}

        <button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className="w-full border border-[#f5f0ff]/60 rounded-full py-3 uppercase tracking-widest text-sm disabled:opacity-30 flex items-center justify-center gap-2"
        >
          {loading ? (
            <Logo size={20} />
          ) : added ? (
            "Added"
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </main>
  );
}
