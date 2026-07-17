import ProductGrid from "@/components/products/ProductGrid";
import ProductsHead from "@/components/products/ProductsHead";
import products from "@/data/products.json";

export default function ProductPage() {
  // const response = await fetch("http://localhost:3000/products.json");
  // const data = await response.json();
  return (
    <div>
      <ProductsHead />
      <ProductGrid products={products} />
    </div>
  );
}
