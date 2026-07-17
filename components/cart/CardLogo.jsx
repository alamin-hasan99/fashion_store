"use client";
import { useProductContext } from "@/hooks/useProducts";
import { Handbag } from "lucide-react";
export default function CardLogo() {
  const {state, dispatch } = useProductContext();

  const totalAmount = state.cart.reduce((item, pro) => item + pro.price * pro.quantity, 0)
  return (
    <div onClick={()=> dispatch({type:"TOGGLE"}) } className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block cursor-pointer">
      <div className="w-16 bg-surface shadow-md pt-1  flex flex-col items-center gap-0.5">
        <Handbag size={36} className="text-primary" />

        <p className="text-sm ">৳ {totalAmount}</p>

        <p className="text-sm bg-danger w-full text-center text-text-primary py-0.5 ">
          {state.cart.length} Items
        </p>
      </div>
    </div>
  );
}
