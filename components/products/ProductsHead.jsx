"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductsHead() {
  return (
    <motion.div
      className="my-3 md:my-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className=" hidden md:block relative w-full h-70 mb-8">
        <Image src="/fashionLifestyle.webp" fill alt="Fashion and Lifestyle" />
      </div>
      
      <div className="mb-8">
        <h2 className=" text-2xl text-text-primary mb-4" >Categories</h2>
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }}  transition={{ duration: 0.4 }} className=" relative w-30 h-25 border border-border shadow rounded overflow-hidden">
            <Image src="/men.png" alt="Men" fill />
            <span className="absolute bottom-0 left-0 bg-bg w-full text-[12px] py-1 px-2 text-text-secondary" >Men&apos;s Fashion</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}  transition={{ duration: 0.4 }} className=" relative w-30 h-25 border border-border shadow rounded overflow-hidden">
          <Image src="/women.jpg" alt="Women" fill />
            <span className="absolute bottom-0 left-0 bg-bg w-full text-[12px] py-1 px-2 text-text-secondary" >Women&apos;s Fashion</span>
          </motion.div>
          <div>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
