"use client";
import { useProductContext } from "@/hooks/useProducts";
import { AnimatePresence, motion } from "framer-motion";
import { Handbag, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardModal() {
  const { state, dispatch } = useProductContext();

  function handleRemove(id) {
    dispatch({
      type:"REMOVE_CART",
      payload: id,
    })
  }
  const totalAmount = state.cart.reduce((item, pro) => item + pro.price * pro.quantity, 0)
  return (
    <AnimatePresence>
      {state.isCartOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=" flex flex-col z-50 bg-surface w-full h-screen md:w-96  md:h-[70vh]  fixed md:right-0 top-1/2 -translate-y-1/2 "
        >
          <div className="flex items-center justify-between bg-primary-soft mb-4 py-3 px-3 ">
            <div className="flex items-center gap-5">
              <span>
                <Handbag size={24} className="text-primary" />
              </span>
              <span className=" font-bold uppercase">{state.cart.length} Items</span>
            </div>
            <button onClick={() => dispatch({ type: "TOGGLE" })}>
              <X size={20} className="text-danger cursor-pointer" />
            </button>
          </div>
          {/* Empty card */}
          {state.cart.length === 0 ? (
            <div className="p-3 text-center border-y border-border">
              <div className=" relative h-64 mb-2">
                <Image src="/cartEmpty.jpg" alt="Empty Cart" fill />
              </div>
              <p className=" text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div>
              {state.cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-3 px-4 border-b border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 relative shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        className=" object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm">{product.name}</h3>
                      <p className=" text-text-primary font-medium">৳ {product.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className=" text-danger flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 mt-auto">
            <div className=" bg-success text-center py-3 text-text-primary">
              <Link href="/cart" className="cursor-pointer">Place Order</Link>
            </div>
            <p className=" bg-danger text-center py-3 text-text-primary">
              ৳ {totalAmount}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
