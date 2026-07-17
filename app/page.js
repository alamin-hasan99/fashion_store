import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

export default async function Home() {
  const response = await fetch("http://localhost:3000/products.json");
  const data = await response.json();
  return (
    <section>
      <Hero />
      <FeaturedProducts products={data} />
    </section>
  );
}
