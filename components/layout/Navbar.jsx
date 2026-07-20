"use client";
import { useProductContext } from "@/hooks/useProducts";
import { HeartPlus, Search, ShoppingCart } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ToggleBtn = dynamic(() => import("./ToggleBtn"), { ssr: false });

export default function Navbar() {
  const { state, dispatch } = useProductContext();
  return (
    <header className=" w-full flex items-center justify-around px-4 py-2 z-40 shadow shadow-border sticky top-0 bg-surface">
      <div>
        <Link href="/">
          <Image
            src="/fashion-store-logo.svg"
            alt="Fashion Store Logo"
            width={80}
            height={80}
            priority
            className="w-20 h-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </Link>
      </div>
      <ul className=" flex items-center gap-8">
        <li
          className="hidden md:block"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Link
            href="/"
            className="text-text-primary hover:text-primary-hover transition-all duration-300 font-bold text-[16px]"
          >
            Home
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            href="/products"
            className="text-text-primary hover:text-primary-hover transition-all duration-300 font-bold text-[16px]"
          >
            Products
          </Link>
        </li>
        <div className=" relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            placeholder="Search items"
            value={state.searchTerm}
            onChange={(e) =>
              dispatch({ type: "SEARCHTERM", payload: e.target.value })
            }
            className="lg:w-80 w-50 rounded-4xl border border-border py-2 pl-10 pr-4 outline-none"
          />
        </div>
      </ul>

      <div className="hidden md:flex items-center gap-10">
        <Link href="/wishlist" className=" relative cursor-pointer">
          {state.wishlist.length === 0 ? (
            " "
          ) : (
            <span className=" absolute top-0 right-3 bg-danger rounded-full px-2 text-sm ">
              {state.wishlist.length}
            </span>
          )}
          <HeartPlus size={28} />
        </Link>
        <button
          className=" relative cursor-pointer"
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          {state.cart.length === 0 ? (
            " "
          ) : (
            <span className=" absolute top-0 right-3 bg-danger rounded-full px-2 text-sm ">
              {state.cart.length}
            </span>
          )}
          <ShoppingCart size={28} />
        </button>
        <ToggleBtn />
      </div>
    </header>
  );
}
