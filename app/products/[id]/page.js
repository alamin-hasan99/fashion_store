import ProductAction from "@/components/productDetails/ProductAction";
import { Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/products.json";

export default async function ProductsPageDetails({ params }) {
  const { id } = await params;
  // console.log(id)

  // const response = await fetch("http://localhost:3000/products.json");
  // const products = await response.json();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <section className="p-5 pb-24 lg:p-12">
      <div className=" text-center mb-6">
        <h1 className=" text-4xl font-semibold text-text-primary">Products Details</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <div className=" relative h-60 lg:h-112.5 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className=" object-cover"
          />
        </div>

        <div className="py-2 flex flex-col gap-2">
          <h3 className="text-lg text-text-primary">{product.name}</h3>
          <p className="text-text-primary flex gap-2">
            {" "}
            Category:
            <span className="text-primary">{product.category}</span>{" "}
          </p>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-primary">Rating:</span>
            <span className=" flex items-center gap-0.5 text-danger ">
              <Star size={16} />
              {product.rating}
            </span>
          </div>
          <p className="text-text-primary flex items-center gap-2">
            {" "}
            Price:
            <span className="text-lg font-bold text-primary">
              ৳ {product.price}
            </span>{" "}
          </p>

          <div className="text-text-primary flex items-center gap-2">
            {" "}
            Stock:
            {product.inStock ? (
              <span className=" text-success font-medium">In Stock</span>
            ) : (
              <span className=" text-danger font-medium">Out of Stock</span>
            )}{" "}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            Colors:
            {product.colors.map((color) => (
              <button key={color} className="px-2 py-1 border border-primary">
                {color}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            Sizes:
            {product.sizes.map((size) => (
              <button key={size} className="px-2 py-1 border border-primary">
                {size}
              </button>
            ))}
          </div>

          <ProductAction product={product} />
        </div>

      </div>
        <details className=" w-96 border border-border px-3 py-2 cursor-pointer rounded mt-10">
          <summary className="font-bold">Description</summary>
          <p className="mt-2 text-text-secondary">{product.description}</p>
        </details>
    </section>
  );
}
