"use client";

import { useProductContext } from "@/hooks/useProducts";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductGrid({products}) {
    const { state } = useProductContext();
    let copyProducts = [...products]
    let productsFiltered = copyProducts.filter((product) => product.name.toLowerCase().includes(state.searchTerm.toLowerCase()));

    const categoriesTag = ["All", ...new Set(copyProducts.map((pro)=> pro.category))]
    if(state.category !== "All"){
        productsFiltered = productsFiltered.filter((pro) => pro.category === state.category)
    }

    if(state.price === "low"){
        productsFiltered.sort((a, b) => a.price - b.price);
    }
    if (state.price === "high") {
        productsFiltered.sort((a, b) => b.price - a.price);
    }



    
  return (
    <main className=" grid grid-cols-1 md:grid-cols-12 gap-8">
        <CategoryFilter categoriesTag={categoriesTag} />
        <ProductCard products={productsFiltered}/>
    </main> 
  )
}
