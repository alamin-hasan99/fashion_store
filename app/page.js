import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import products from "@/data/products.json";
export default function Home() {
  // const response = await fetch("http://localhost:3000/products.json");
  // const data = await response.json();
  return (
    <section>
      <Hero />
      <FeaturedProducts products={products} />
    </section>
  );
}
