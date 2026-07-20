"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className=" bg-primary-soft pt-6 mt-6">
      <div className=" py-4 xl:w-[60vw] m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
        <div className=" flex flex-col">
          <div className=" relative w-30 h-30 self-start">
            <Image src="/fashion-store-logo.svg" alt="Image" fill priority />
          </div>
          <p className="px-4 text-sm text-text-secondary">
            Discover premium fashion designed for every season and every
            occasion. We bring together quality craftsmanship, modern trends,
            and affordable prices to help you express your unique style with
            confidence.
          </p>
        </div>
        <div className="flex flex-col px-6">
          <h5 className="text-primary font-semibold">Quick Links</h5>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
        <div className="px-6">
          <h5 className="text-primary font-semibold">Service</h5>
          <p>Shipping Policy</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="px-6">
          <h5 className="text-primary font-semibold">Contact</h5>
          <address>
            <p>Dhaka, Bangladesh</p>
            <p>+8801770-583739</p>
            <p>support@fashionstore.com</p>
          </address>
        </div>
      </div>

      <div className=" text-center text-sm bg-border pb-20 pt-4 md:py-4">
        <p>
          &copy; 2026 Fashion Store. Built with Next.js & Tailwind CSS.{" "}
          <span className="text-[10px]">Design By Al-amin Hasan</span>{" "}
        </p>
      </div>
    </motion.footer>
  );
}
