import { useProductContext } from "@/hooks/useProducts";
import { motion } from "framer-motion";
const sorts = [
  { label: "Default", value: "" },
  { label: "Low to High", value: "low" },
  { label: "High to Low", value: "high" },
];

export default function CategoryFilter({ categoriesTag }) {
  const { state, dispatch } = useProductContext();
  return (
    <motion.aside
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="lg:col-span-3 xl:col-span-2 h-[70vh] border border-border shadow"
    >
      <h2 className="bg-success text-text-primary py-1 px-2">Filter</h2>

      <div className="p-3">
        <h3 className=" font-bold">Filter By Category</h3>
        <div className="flex flex-col gap-1">
          {categoriesTag.map((cate) => (
            <label key={cate} className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                name="cate"
                value={cate}
                checked={state.category === cate}
                onChange={(e) =>
                  dispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />

              {cate}
            </label>
          ))}
        </div>
      </div>

      <div className="p-3">
        <h3 className=" font-bold">Sort By Price</h3>

        <div className="flex flex-col gap-1">
          {sorts.map((option) => (
            <label key={option.value} className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                value={option.value}
                checked={state.price === option.value}
                onChange={(e) =>
                  dispatch({ type: "PRICE", payload: e.target.value })
                }
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
