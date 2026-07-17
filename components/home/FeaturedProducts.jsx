"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "../products/ProductCard";

export default function FeaturedProducts({ products }) {
  const featuredProducts = products.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="my-10"
    >
      <div className="text-center">
        <span className="text-primary font-medium uppercase tracking-widest">
          Featured Collection
        </span>

        <h2 className="mt-2 text-4xl font-bold text-text-primary">
          Featured Products
        </h2>
      </div>

      <div className="flex items-center justify-between px-6 my-6">
        <div></div>
        <div>
          <Link href="/products" className="text-primary">
            View All Products
          </Link>
        </div>
      </div>
      <div>
        <ProductCard products={featuredProducts} />
      </div>
    </motion.div>
  );
}
