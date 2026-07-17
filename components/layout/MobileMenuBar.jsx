"use client";
import { useProductContext } from "@/hooks/useProducts";
import { AnimatePresence, motion } from "framer-motion";
import { HeartPlus, Menu, ShoppingCart, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const ToggleBtn = dynamic(() => import("./ToggleBtn"), { ssr: false });

export default function MobileMenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch } = useProductContext();

  return (
    <div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 py-2 z-60 bg-surface shadow shadow-border">
        <div className="flex items-center justify-around py-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={28} />
          </button>

          <Link href='/wishlist'>
            <HeartPlus size={28} />
          </Link>

          <button onClick={()=> dispatch({type:"TOGGLE"})}>
            <ShoppingCart size={28} />
          </button>

          <div>
            <ToggleBtn />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <div className="md:hidden fixed inset-0  z-50 flex items-end">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ damping: 28, stiffness: 300 }}
              className="relative w-full bg-surface h-full p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Menu</h3>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/products" onClick={() => setMenuOpen(false)}>
                  Products
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
