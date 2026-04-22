"use client";

import React from "react";
import Link from "next/link";
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

export const products = [
  {
    id: "classic-medium-roast-espresso",
    category: "PREMIUM COFFEE",
    title: "CLASSIC MEDIUM ROST ESPRESSO ",
    image: "/sample.webp",
  },
  {
    id: "majestic-dark-roast",
    category: "PREMIUM COFFEE",
    title: "MAJESTIC DARK ROST ",
    image: "/sample.webp",
  },
  {
    id: "natural-beans",
    category: "GREEN COFFEE CLASSIC",
    title: "NATURAL BEAN'S",
    image: "/sample.webp",
  },
  {
    id: "black-pepper-gold",
    category: "BLACK PEPPER",
    title: "BLACK PEPPER GOLD",
    image: "/sample.webp",
  },
  {
    id: "premium-green-cardamom",
    category: "CARDAMOM GOLD",
    title: "PREMIMUM GREEN CARDAMOM",
    image: "/sample.webp",
  },
  {
    id: "indian-green-cardamom",
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
    <Link href={`/products/${product.id}`} className="block w-full cursor-pointer">
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
    </Link>
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
    <div className="relative flex h-[220px] w-full overflow-hidden rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)] p-3 sm:h-[340px] sm:rounded-[28px] sm:p-7 shadow-[0_24px_50px_-34px_rgba(0,0,0,0.35)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <div className="relative z-10 flex w-full flex-col justify-between gap-2 sm:gap-5">
        <div>
          <span
            className={`${bodyFont.className} hidden text-[10px] font-semibold tracking-[0.16em] uppercase text-black/70 sm:block sm:text-xs`}
          >
            Products and Services
          </span>
          <span
            className={`${bodyFont.className} block text-[10px] font-semibold tracking-[0.16em] uppercase text-black sm:hidden`}
          >
            Products and Services
          </span>
        </div>

        <div className="hidden flex-1 sm:grid sm:grid-cols-3 sm:gap-3">
          {mainServices.map((service, idx) => (
            <div
              key={idx}
              className="group flex gap-3 rounded-xl border border-black/10 bg-white p-3 transition-colors duration-300 hover:bg-neutral-50"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black/20 bg-black/[0.03] transition-colors duration-300 group-hover:bg-black/90">
                  <div className="h-2 w-2 rounded-full bg-black transition-colors duration-300 group-hover:bg-white" />
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={`${bodyFont.className} mb-1 text-sm leading-tight font-semibold text-black`}
                >
                  {service.title}
                </p>
                <p
                  className={`${bodyFont.className} text-xs leading-snug text-black/65`}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden grid grid-cols-1 gap-1.5 flex-1">
          {mainServices.map((service, idx) => (
            <div
              key={idx}
              className="flex gap-1.5 rounded-md border border-black/10 bg-white px-1.5 py-1"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="flex h-4 w-4 items-center justify-center rounded-full border border-black/30 bg-black/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={`${bodyFont.className} text-[8px] leading-tight font-semibold text-black`}
                >
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-black/10 pt-1.5 sm:pt-4">
          <ul className="hidden sm:grid grid-cols-3 gap-2 sm:gap-2">
            {supportServices.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 rounded-lg border border-black/10 bg-white p-2.5"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black/85" />
                <span
                  className={`${bodyFont.className} text-xs leading-snug font-semibold text-black/85`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <ul className="sm:hidden grid grid-cols-1 gap-0.5">
            {supportServices.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-1.5 rounded border border-black/10 bg-white px-1.5 py-1"
              >
                <span className="mt-1 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-black" />
                <span
                  className={`${bodyFont.className} text-[7px] leading-tight font-semibold text-black`}
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

function RightGifPanel() {
  return (
    <div className="relative hidden h-[340px] w-full overflow-hidden rounded-[28px] border border-black/15 bg-white sm:block shadow-[0_20px_50px_-30px_rgba(0,0,0,0.22)]">
      <img
        src="/black.gif"
        alt="Coffee showcase animation"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function MobileGifPanel() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-[16px] border border-black/15 bg-white shadow-[0_20px_45px_-30px_rgba(0,0,0,0.3)]">
      <img
        src="/black.gif"
        alt="Coffee showcase animation"
        className="h-full w-full object-cover"
        loading="lazy"
      />
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
    <section id="products" className="relative overflow-hidden bg-[linear-gradient(180deg,#f6fbf5_0%,#eef7ef_100%)] px-6 pt-8 pb-12 lg:px-8 lg:pt-10 lg:pb-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:gap-8">
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
          <MobileGifPanel />
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

        <div className="hidden grid-cols-3 gap-8 sm:grid">
          <div className="col-span-3 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <ServicesPanel />
              </div>
              <RightGifPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
