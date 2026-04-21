"use client";

import React from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const products = [
  {
    category: "PREMIUM COFFEE",
    title: "CLASSIC MEDIUM ROST ESPRESSO ",
    image: "/sample.webp",
  },
  {
    category: "PREMIUM COFFEE",
    title: "MAJESTIC DARK ROST ",
    image: "/sample.webp",
  },
  {
    category: "GREEN COFFEE CLASSIC",
    title: "NATURAL BEAN'S",
    image: "/sample.webp",
  },
  {
    category: "BLACK PEPPER",
    title: "BLACK PEPPER GOLD",
    image: "/sample.webp",
  },
  {
    category: "CARDAMOM GOLD",
    title: "PREMIMUM GREEN CARDAMOM",
    image: "/sample.webp",
  },
  {
    category: "GREEN CARDAMOM",
    title: "INDIAN GREEN CARDAMOM",
    image: "/sample.webp",
  },
];

const companyQuote =
  "Green Coffee Commoditys is a trusted exporter of high-quality coffee and cardamom, delivering excellence to global markets";

function ProductCard({ product, tone = "brown" }) {
  const categoryColorClass =
    tone === "brown"
      ? "text-[#5b3924]"
      : tone === "black"
        ? "text-black"
        : "text-[#2f7d32]";
  const titleColorClass =
    tone === "brown"
      ? "text-[#5b3924]"
      : tone === "black"
        ? "text-black"
        : "text-[#2f7d32]";

  return (
    <CardContainer className="w-full" containerClassName="w-full py-0">
      <CardBody className="group/card relative h-[220px] w-full overflow-hidden rounded-[16px] border border-white/40 bg-white shadow-[0_25px_70px_-38px_rgba(22,101,52,0.4)] sm:h-[520px] sm:rounded-[28px]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute bottom-[-2%] left-1/2 h-[96%] w-[88%] -translate-x-1/2 object-contain transition duration-500 group-hover/card:scale-105 sm:bottom-[-8%] sm:left-auto sm:right-[-16%] sm:h-[122%] sm:w-[86%] sm:translate-x-0 sm:rotate-[10deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

        <CardItem
          translateZ="70"
          className={`${bodyFont.className} absolute left-2 top-2 max-w-[52%] text-[6px] font-semibold tracking-[0.08em] uppercase sm:left-7 sm:top-24 sm:max-w-[30%] sm:text-[9px] sm:tracking-[0.2em] ${categoryColorClass}`}
        >
          {product.category}
        </CardItem>

        <CardItem
          translateZ="80"
          className={`${bodyFont.className} absolute left-2 top-5 max-w-[52%] text-[9px] leading-[1.05] font-extrabold uppercase sm:left-7 sm:top-32 sm:max-w-[30%] sm:text-[1.5rem] sm:leading-7 ${titleColorClass}`}
        >
          {product.title}
        </CardItem>

        <CardItem
          translateZ="110"
          className="absolute right-2 bottom-2 rounded-full border border-white/30 bg-white/15 px-2 py-1 text-[7px] font-semibold tracking-[0.08em] text-white uppercase backdrop-blur-sm sm:right-7 sm:bottom-8 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]"
        >
          View Product
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

function QuotePanel() {
  return (
    <div className="relative flex h-[220px] w-full overflow-hidden rounded-[16px] border border-emerald-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(236,248,238,0.95))] p-5 shadow-[0_25px_70px_-38px_rgba(22,101,52,0.25)] sm:h-[520px] sm:rounded-[28px] sm:p-10">
      <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-emerald-200/40 blur-3xl sm:h-44 sm:w-44" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#6f4a32]/10 blur-3xl sm:h-36 sm:w-36" />
      <div className="relative flex h-full flex-col justify-between text-center sm:text-left">
        <span
          className={`${bodyFont.className} text-[10px] font-semibold tracking-[0.18em] uppercase text-emerald-800 sm:text-xs sm:tracking-[0.28em]`}
        >
          Our Promise
        </span>
        <blockquote
          className={`${headingFont.className} mx-auto max-w-[18rem] text-base leading-tight text-black sm:mx-0 sm:max-w-3xl sm:text-4xl sm:leading-[1.08]`}
        >
          “{companyQuote}”
        </blockquote>
        <span
          className={`${bodyFont.className} text-[10px] font-medium tracking-[0.12em] uppercase text-neutral-500 sm:text-xs sm:tracking-[0.22em]`}
        >
          Crafted for global buyers
        </span>
      </div>
    </div>
  );
}

function ServicesPanel() {
  const mainServices = [
    { title: "Premium Green Coffee", desc: "and Roasted Beans" },
    { title: "Quality Varieties", desc: "Arabica & Robusta" },
    { title: "International Standards", desc: "Carefully selected & sorted" },
  ];

  const supportServices = [
    "Bulk Supply to Coffee Mills & Roasters",
    "Export & Logistics Support",
    "Sustainable & Ethical Trading Practices",
  ];

  return (
    <div className="relative flex h-[220px] w-full overflow-hidden rounded-[16px] border border-emerald-200/40 bg-gradient-to-br from-emerald-50 to-green-50/80 p-4 sm:h-[340px] sm:rounded-[28px] sm:p-8 shadow-[0_25px_70px_-38px_rgba(22,101,52,0.2)]">
      {/* Background Images with Better Visibility - Desktop Only */}
      <div className="hidden sm:block absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <img
          src="/log.png"
          alt="Background"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 object-cover"
        />
        <img
          src="/log1.jpg"
          alt="Background"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(134,239,172,0.1),transparent_50%)]" />

      {/* Center Moving Image - Desktop Only */}
      <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none">
        <div className="animate-move-to-center">
          <img
            src="/black.webp"
            alt="Coffee beans and spices"
            className="w-48 h-48 object-cover rounded-lg opacity-40"
          />
        </div>
      </div>

      {/* Decorative Images */}
      <div className="hidden sm:block absolute bottom-2 right-2 w-16 h-16 opacity-30 pointer-events-none">
        <img
          src="/cofee.webp"
          alt="Coffee decoration"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="hidden sm:block absolute top-4 right-6 w-12 h-12 opacity-25 pointer-events-none">
        <img
          src="/card.webp"
          alt="Cardamom decoration"
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      <div className="relative w-full flex flex-col justify-between gap-2 sm:gap-3 z-10">
        {/* Title */}
        <div>
          <span
            className={`${bodyFont.className} text-[9px] font-semibold tracking-[0.2em] uppercase text-emerald-700 block sm:text-xs`}
          >
            Our Products And Services
          </span>
        </div>

        {/* Main Services - Desktop */}
        <div className="hidden sm:grid grid-cols-3 gap-3 flex-1">
          {mainServices.map((service, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#d7c65d]/30 border border-[#d7c65d]">
                  <div className="h-2 w-2 rounded-full bg-[#d7c65d]" />
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={`${bodyFont.className} text-sm font-semibold text-emerald-900 mb-0.5`}
                >
                  {service.title}
                </p>
                <p
                  className={`${bodyFont.className} text-xs text-emerald-700/80`}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Services - Mobile */}
        <div className="sm:hidden grid grid-cols-1 gap-2 flex-1">
          {mainServices.map((service, idx) => (
            <div key={idx} className="flex gap-2">
              <div className="flex-shrink-0 mt-0.5">
                <div className="flex items-center justify-center h-4 w-4 rounded-full bg-[#d7c65d]/30 border border-[#d7c65d]">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#d7c65d]" />
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={`${bodyFont.className} text-[9px] font-semibold text-emerald-900`}
                >
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Services */}
        <div className="border-t border-emerald-200/40 pt-2 sm:pt-3">
          <ul className="hidden sm:grid grid-cols-3 gap-2 sm:gap-2">
            {supportServices.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-2 items-start bg-emerald-100/60 rounded-lg p-2.5 border border-emerald-200/60"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d7c65d] flex-shrink-0 mt-1" />
                <span
                  className={`${bodyFont.className} text-xs font-semibold text-emerald-900 leading-snug`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <ul className="sm:hidden grid grid-cols-1 gap-1">
            {supportServices.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-2 items-start bg-emerald-100/60 rounded px-2 py-1.5 border border-emerald-200/60"
              >
                <span className="inline-block h-1 w-1 rounded-full bg-[#d7c65d] flex-shrink-0 mt-1" />
                <span
                  className={`${bodyFont.className} text-[8px] font-semibold text-emerald-900 leading-tight`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcaseSection() {
  const firstRowProducts = products.slice(0, 3);
  const secondRowProduct = products[3];
  const thirdRowProducts = [products[4], products[5], products[0]];
  const mobileRows = [
    {
      heading: "Premium Coffee",
      items: products.slice(0, 2),
      tones: ["brown", "brown"],
    },
    {
      heading: "Premium Coffee",
      items: [products[2]],
      tones: ["brown"],
      quote: true,
    },
    {
      heading: "Cardamom",
      items: [products[5], products[4]],
      tones: ["green", "green"],
    },
    {
      heading: "Black Pepper",
      items: [products[3]],
      tones: ["black"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6fbf5_0%,#eef7ef_100%)] px-6 pt-8 pb-12 lg:px-8 lg:pt-10 lg:pb-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-8">
        <div className="mb-1 text-center sm:mb-3">
          <h2
            className={`${headingFont.className} text-3xl font-semibold tracking-tight text-black sm:text-5xl`}
          >
            Discover The Purest Taste Of Origin
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:hidden">
          {mobileRows.map((row, rowIndex) => (
            <div key={`mobile-row-${rowIndex}`} className="flex flex-col gap-3">
              {(rowIndex === 0 ||
                mobileRows[rowIndex - 1].heading !== row.heading) && (
                <h3
                  className={`${bodyFont.className} px-1 text-center text-base font-semibold tracking-[0.08em] uppercase text-black`}
                >
                  {row.heading}
                </h3>
              )}
              <div className="grid grid-cols-2 gap-3">
                {row.items.map((product, productIndex) => (
                  <div
                    key={`mobile-row-${rowIndex}-card-${productIndex}`}
                    className={row.items.length === 1 ? "col-span-1" : ""}
                  >
                    <ProductCard
                      product={product}
                      tone={row.tones[productIndex]}
                    />
                  </div>
                ))}
                {row.quote && <QuotePanel />}
                {rowIndex === mobileRows.length - 1 && <ServicesPanel />}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden grid-cols-3 gap-8 sm:grid">
          <div className="col-span-3 flex flex-col gap-5">
            <h3
              className={`${bodyFont.className} text-xl font-semibold tracking-[0.08em] uppercase text-black`}
            >
              Premium Coffee
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {firstRowProducts.map((product, index) => (
                <ProductCard
                  key={`first-row-${index}`}
                  product={product}
                  tone="brown"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden grid-cols-3 gap-8 sm:grid">
          <div className="col-span-3 flex flex-col gap-5">
            <h3
              className={`${bodyFont.className} text-xl font-semibold tracking-[0.08em] uppercase text-black`}
            >
              Black Pepper
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <ProductCard
                key="second-row-0"
                product={secondRowProduct}
                tone="black"
              />
              <div className="col-span-2">
                <QuotePanel />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden grid-cols-3 gap-8 sm:grid">
          <div className="col-span-3 flex flex-col gap-5">
            <h3
              className={`${bodyFont.className} text-xl font-semibold tracking-[0.08em] uppercase text-black`}
            >
              Cardamom
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {thirdRowProducts.map((product, index) => (
                <ProductCard
                  key={`third-row-${index}`}
                  product={product}
                  tone="green"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:grid">
          <div className="col-span-3 flex flex-col gap-5">
            <ServicesPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
