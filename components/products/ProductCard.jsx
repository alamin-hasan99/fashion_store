"use client";
import { useProductContext } from "@/hooks/useProducts";
import { motion } from "framer-motion";
import { Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function ProductCard({ products }) {
  
  const { state, dispatch } = useProductContext();

  if (!products || products.length === 0) {
    return (
      <div className="lg:col-span-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold">No products found</h2>
  
        <p className="mt-2 text-text-secondary">
          No results found for{" "}
          <span className="font-bold">{state.searchTerm}</span>
        </p>
      </div>
    );
  }

  function handleAddToCart(product) {
    dispatch({
        type:"ADD_TO_CART",
        payload: {
            ...product,
            quantity: 1,
        } 
    })
}

  return (
    <section className="lg:col-span-9 xl:col-span-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-surface rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative w-full h-64 bg-surface">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 flex bg-bg/20 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ">
              <Link href={`/products/${product.id}`}>
                <div className="relative group/tol ">
                  <button className=" bg-bg rounded-full p-2 cursor-pointer">
                    <Eye size={24} />
                  </button>
                  <span className=" absolute bottom-2 text-[12px] transition-all duration-300 bg-bg p-0.5 rounded whitespace-nowrap opacity-0 group-hover/tol:opacity-100">
                    Quick View
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">{product.category}</span>
              <span className=" flex items-center gap-0.5 text-danger ">
                <Star size={16} />
                {product.rating}
              </span>
            </div>
            <h3 className="text-lg text-text-primary">{product.name}</h3>
            <p className="text-lg font-bold text-primary">৳ {product.price}</p>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={!product.inStock}
            className={`block py-2 text-text-primary text-center w-full text-lg ${product.inStock ? " bg-success cursor-pointer" : " bg-danger text-text-secondary cursor-not-allowed"}`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </motion.div>
      ))}
    </div>
    </section>
  );
}
