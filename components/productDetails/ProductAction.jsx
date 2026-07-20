"use client";
import { useProductContext } from "@/hooks/useProducts";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";


export default function ProductAction({ product }) {
    const {state, dispatch } = useProductContext();
    console.log(state.wishlist.length)

    const [quantity, setQuantity] = useState(1);
    const increse = ()=> {
        setQuantity((incre) => incre + 1)
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity((dec) => dec - 1)
        }
    }

    function handleAddToCart() {
        dispatch({
            type:"ADD_TO_CART",
            payload: {
                ...product,
                quantity
            } 
        })
    }

    function handleWishlist () {
        dispatch({
            type: "WISHLIST",
            payload: product
        })
    }

  return (
    <div>
      <div className="flex items-center gap-3 mt-2">
        <p className="text-text-primary">Quantity:</p>

        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <button onClick={decrease} className="w-10 h-10 flex items-center justify-center hover:bg-primary-soft hover:text-danger cursor-pointer transition"><Minus size={16} /></button>
          <span className="w-12 flex items-center justify-center text-center font-bold">{quantity}</span>
          <button onClick={increse} className="w-10 h-10 flex items-center justify-center hover:bg-primary-soft cursor-pointer hover:text-success transition"><Plus size={16} /></button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-3 w-40">
        <button onClick={handleAddToCart} disabled={!product.inStock} className={`${product.inStock ? "cursor-pointer bg-primary hover:bg-primary-hover transition duration-300" : " bg-danger cursor-not-allowed"} py-3 rounded  text-white flex items-center justify-center gap-2`}>
          <ShoppingCart size={18} />
          {product.inStock ? "Add to Cart" : "Out of Stock"} 
        </button>

        <button onClick={handleWishlist} className="py-3 rounded border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition duration-300 flex items-center justify-center gap-1">
          <Heart size={18} />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
