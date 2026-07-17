"use client";

import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

export function useProductContext() {
  return useContext(ProductContext);
}
