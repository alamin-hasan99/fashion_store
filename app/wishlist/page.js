"use client"
import { useProductContext } from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from 'lucide-react';

export default function WishList() {
  const { state, dispatch } = useProductContext();
  function handleAddToCart (product) {
    dispatch({
      type:"ADD_TO_CART",
      payload: {
          ...product,
          quantity: 1,
      } 
  })
  }


  function handleRemove(id) {
    dispatch({
      type:"REMOVE_WISHLIST",
      payload: id,
    })
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl mt-6">Your Wishlist Items</h1>

      {state.wishlist.length === 0 ? (
        <div className="xl:mt-60 mt-16">
          <h2 className="text-3xl">Your wishlist is empty</h2>
          <article className=" text-text-secondary text-sm my-6">
            <p>Seems like you don&apos;t have wishes here.</p>
            <p>Explore more and make a wish.</p>
            <p>Store everything you love on page</p>
          </article>
          <Link className=" bg-primary px-5 py-2" href="/">
            Go To Home
          </Link>
        </div>
      ) : (
        <div className="flex flex-col border border-border p-4">
          <div className=" grid grid-cols-4 border-b border-border py-4">
            <p className=" font-medium text-text-primary">Product</p>
            <p className=" font-medium text-text-primary">Price</p>
            <p className=" font-medium text-text-primary">Action</p>
            <p className=" font-medium text-text-primary">Remove</p>
          </div>

          {
            state.wishlist.map((product) => (

          <div  key={product.id} className="grid grid-cols-4 py-4 items-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 relative">
                <Image src={product.image} alt={product.name} fill priority className=" object-cover rounded"/>
              </div>
              <h3>{product.name}</h3>
            </div>
            <p className=" text-text-primary">৳ {product.price}</p>
            <div>
            <button onClick={() =>handleAddToCart(product)} className="rounded cursor-pointer bg-primary px-3 py-0.5">Add to Cart</button>
            </div>
            <button onClick={() => handleRemove(product.id)} className=" text-danger flex items-center justify-center cursor-pointer"><Trash2 size={20} /></button>
          </div>
            ))}


        </div>
      )}
    </div>
  );
}
