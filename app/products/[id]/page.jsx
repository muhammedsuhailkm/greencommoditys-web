"use client";

import React, { use } from "react";
import { products } from "@/components/ProductShowcaseSection";
import { Link } from "@/components/Link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function ProductPage({ params }) {
  // Unwrap params using React.use for Next.js 15 compatibility in Client Components
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen pt-28 pb-12 bg-[#fcfcfc]">
        <main className="flex-grow flex items-center justify-center">
          <h1
            className={`${headingFont.className} text-4xl font-bold text-neutral-800`}
          >
            Product not found
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc]">
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-center md:items-start">
            {/* Left Side: Product Image Wrapper similar to the design */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[420px] bg-[#e4e5dd] rounded-[2rem] overflow-hidden flex items-center justify-center p-12 shadow-inner">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full scale-[2.5] object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-12">
              <h1
                className={`${headingFont.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-black mb-6 leading-[1.1] tracking-tight`}
              >
                {product.title}
              </h1>

              <p
                className={`${bodyFont.className} text-base sm:text-lg text-neutral-600 mb-10 leading-relaxed max-w-md`}
              >
                Experience the finest {product.category.toLowerCase()} sourced
                with care. Made from 100% natural and high-quality ingredients.
                Provides a timeless flavor and aroma that will delight your
                senses and elevate your daily routine.
              </p>

              {/* Size selection instead of Add to Cart */}
              <div className="w-full max-w-md flex flex-col items-center md:items-start">
                <div className="flex flex-row gap-4 justify-center md:justify-start">
                  <div className="px-8 py-3 rounded-full border-2 border-black bg-black text-white font-medium cursor-pointer transition-colors hover:bg-neutral-800">
                    500 gm
                  </div>
                  <div className="px-8 py-3 rounded-full border-2 border-neutral-300 bg-transparent text-black font-medium cursor-pointer transition-colors hover:border-black">
                    1 kg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer from home page */}
      <footer className="bg-black text-white pt-10 pb-5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 grid gap-7 md:grid-cols-3">
            <div className="md:col-span-1">
              <Link className="mb-3 inline-flex items-center gap-2" href="/">
                <span className="inline-flex rounded-xl bg-white px-3 py-2 shadow-[0_8px_22px_-12px_rgba(255,255,255,0.5)]">
                  <img
                    src="/logoorg.webp"
                    alt="Green Coffee Commoditys Logo"
                    className="h-12 w-auto"
                    loading="lazy"
                  />
                </span>
              </Link>
              <p className="max-w-md text-sm leading-relaxed text-white">
                At Green Coffee Commoditys, we believe in coffee that tells a
                story — a story of trust, tradition, and transformation. Based
                in the lush hills of Wayanad, Kerala, our mission is simple yet
                powerful:
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  href="https://youtube.com/@greencoffeecommodityscoffee?si=19KJFemyU0lWOsar"
                >
                  <FaYoutube className="h-5 w-5" />
                </Link>
                <Link
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  href="https://www.instagram.com/aslam_ayankey?igsh=MTFzYTlsejg5YmFyeA=="
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-300" />
                  <span>info@greencommoditys.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-300" />
                  <span>INDIA +91 7558963712</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-300" />
                  <span>SAUDI +966 559407752</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-semibold text-white">Address</h4>
              <div className="flex items-start gap-3 text-white">
                <MapPin className="mt-1 h-5 w-5 text-emerald-300" />
                <span className="leading-relaxed">
                  Anchukunnu, Wayanad, Kerala, India 670645
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-white">
              © 2026 Green Coffee Commoditys. All rights reserved.
            </p>
            <p className="text-sm text-white">Wayanad, Kerala, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
