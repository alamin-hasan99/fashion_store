"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 py-8 lg:py-12">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="inline-block  text-lg font-medium text-tetx-primary">
          Made for modern you
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
          Discover Premium Fashion For Every Occasion
        </h1>

        <div>
          <Link
            href="/products"
            className="rounded bg-primary px-6 py-3 font-medium text-white"
          >
            Shop Now
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6">
          <div className="rounded border border-border bg-surface p-4 text-center shadow">
            <h3 className="text-2xl font-bold text-primary">10K+</h3>
            <p className="text-sm text-text-secondary">Happy Customers</p>
          </div>

          <div className="rounded border border-border bg-surface p-4 text-center shadow">
            <h3 className="text-2xl font-bold text-primary">500+</h3>
            <p className="text-sm text-text-secondary">Premium Products</p>
          </div>

          <div className="rounded border border-border bg-surface p-4 text-center shadow">
            <h3 className="text-2xl font-bold text-primary">4.9 ★</h3>
            <p className="text-sm text-text-secondary">Customer Rating</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-80 md:h-96 lg:h-125"
      >
        <Image
          src="/hero.jpg"
          alt="Fashion Models"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
