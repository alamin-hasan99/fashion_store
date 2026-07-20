"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "../products/ProductCard";
import { ThumbsUp, Headphones, Truck, CreditCard } from 'lucide-react';

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

      <div className="flex items-center justify-between px-6 my-4">
        <div>
          <p className="text-text-primary font-medium">Top Selling Products</p>
        </div>
        <div>
          <Link href="/products" className="text-primary hover:text-danger duration-300 transition-all">
            View All Products
          </Link>
        </div>
      </div>

      <div>
        <ProductCard products={featuredProducts} />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 my-4 md:my-6 lg:mb-12 lg:mt-20">
        <div className=" flex flex-col gap-2 items-center">
          <div className=" bg-primary p-3 border-8 border-border rounded-full text-white"> <ThumbsUp size={36} className="transition-transform duration-300 hover:scale-x-[-1]"/>  </div>
          <h4 className=" text-[16px] font-semibold">High-quality Goods</h4>
          <p className="text-[12px]">Enjoy top quality items for less</p>
        </div>

        <div className=" flex flex-col gap-2 items-center">
          <div  className=" bg-primary p-3 border-8 border-border rounded-full text-white"> <Headphones size={36} className="transition-transform duration-300 hover:scale-x-[-1]"/> </div>
          <h4 className=" text-[16px] font-semibold">24/7 Live chat</h4>
          <p className="text-[12px]">Get instant assistance whenever you need it</p>
        </div>
        <div className=" flex flex-col gap-2 items-center">
          <div  className=" bg-primary p-3 border-8 border-border rounded-full text-white"> <Truck size={36} className="transition-transform duration-300 hover:scale-x-[-1]"/> </div>
          <h4 className=" text-[16px] font-semibold">Express Shipping</h4>
          <p className="text-[12px]">Fast & reliable delivery options</p>
        </div>
        <div className=" flex flex-col gap-2 items-center">
          <div  className=" bg-primary p-3 border-8 border-border rounded-full text-white"> <CreditCard size={36} className="transition-transform duration-300 hover:scale-x-[-1]"/> </div>
          <h4 className=" text-[16px] font-semibold">Secure Payment</h4>
          <p className="text-[12px]">Multiple safe payment methods</p>
        </div>

      </div>
    </motion.div>
  );
}
