import ProductGrid from "@/components/products/ProductGrid";
import ProductsHead from "@/components/products/ProductsHead";

export default async function ProductPage() {
  const response = await fetch("http://localhost:3000/products.json");
  const data = await response.json();
  return (
    <div>
      <ProductsHead />
      <ProductGrid products={data} />
    </div>
  );
}
