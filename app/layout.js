import CardLogo from "@/components/cart/CardLogo";
import CardModal from "@/components/cart/CardModal";
import Footer from "@/components/layout/Footer";
import MobileMenuBar from "@/components/layout/MobileMenuBar";
import Navbar from "@/components/layout/Navbar";
import { ProductProvider } from "@/context/ProductContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fashion Store",
  description: "This Fashion Store is for all kind of Products",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${roboto_mono.variable}`}
    >
      <body className="md:w-[80vw] m-auto">
        <ThemeProvider>
          <ProductProvider>
            <Navbar />
            <CardLogo />
            <CardModal />
            <main className="w-[90vw] md:w-[80vw] m-auto">{children}</main>
            <MobileMenuBar />
            <Footer />
          </ProductProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
