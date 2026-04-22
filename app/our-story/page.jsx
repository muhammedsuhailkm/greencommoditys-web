"use client";

import { Link } from "@/components/Link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import WorldMap from "@/components/ui/world-map";

const storyHeadingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const storyBodyFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function OurStoryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] to-[#eef7ef] px-6 pt-16 pb-6 lg:px-12 lg:pt-24 lg:pb-8">
        <div className="mx-auto max-w-7xl">
          <h1
            className={cn(
              storyHeadingFont.className,
              "text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl",
            )}
          >
            Our Story
          </h1>
          <p
            className={cn(
              storyBodyFont.className,
              "mt-4 max-w-2xl text-lg text-gray-700 sm:text-xl",
            )}
          >
            Discover the journey behind Green Coffee Commoditys and our
            commitment to excellence
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef7ef] to-[#e6f4e6] px-6 py-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Two Column Layout */}
          <div className="grid gap-12 items-center lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Story Section */}
              <div className="space-y-4">
                <p
                  className={cn(
                    storyBodyFont.className,
                    "text-base leading-relaxed text-gray-700 sm:text-lg",
                  )}
                >
                  At Green Coffee Commoditys, we believe in coffee that tells a
                  story - a story of trust, tradition, and transformation. Based
                  in the{" "}
                  <strong className="font-bold text-emerald-700 underline decoration-emerald-300 decoration-2 underline-offset-4">
                    lush hills of Wayanad, Kerala
                  </strong>
                  , our mission is simple yet powerful: To directly connect
                  tribal coffee farmers with quality buyers, ensuring better
                  prices, transparency, and long-term sustainability. Founded by{" "}
                  <strong className="font-bold text-emerald-700 underline decoration-emerald-300 decoration-2 underline-offset-4">
                    Muhammad Aslam Ayanki
                  </strong>
                  , a passionate solo trader from Anjukunnu, our company focuses
                  on ethical sourcing of coffee beans directly from remote
                  highland farmers. We eliminate middlemen, ensuring that
                  farmers receive the value they truly deserve. Our long-term
                  vision is to bring authentic Wayanadan coffee to every corner
                  of the globe - fresh, pure, and rooted in tradition. We are
                  not just building a business - we are nurturing a movement.
                  One farmer, one bean, one buyer at a time.{" "}
                  <strong className="font-bold text-emerald-700 underline decoration-emerald-300 decoration-2 underline-offset-4">
                    Green Coffee Commoditys - Real Coffee. Real People. Real
                    Change.
                  </strong>
                </p>
              </div>
            </div>

            {/* Right Column - World Map */}
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-neutral-900 border border-emerald-100 flex items-center justify-center py-4">
                <h4
                  className={cn(
                    storyHeadingFont.className,
                    "absolute top-6 left-0 right-0 text-3xl sm:text-4xl font-bold text-emerald-950 px-6 text-center z-10",
                  )}
                >
                  From Wayanad to the World
                </h4>
                <div className="w-full mt-10">
                  <WorldMap
                    lineColor="#10b981"
                    dots={[
                      {
                        start: { lat: 11.6854, lng: 76.1320 }, // Wayanad, Kerala
                        end: { lat: 24.7136, lng: 46.6753 }, // Riyadh, Saudi Arabia
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white px-6 py-12 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Mission Card */}
            <div className="rounded-[2rem] border-[1.5px] border-neutral-300 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md sm:p-12">
              <h3
                className={cn(
                  storyHeadingFont.className,
                  "mb-6 text-4xl font-bold text-[#4a332a] border-b-[1.5px] border-[#4a332a]/30 pb-2 inline-block",
                )}
              >
                Mission
              </h3>
              <p
                className={cn(
                  storyBodyFont.className,
                  "text-lg leading-relaxed text-gray-700 sm:text-xl",
                )}
              >
                Our mission is to source high-quality green coffee directly from
                dedicated farmers, ensuring fair trade practices, transparency,
                and value addition, while fostering long-term relationships
                across the supply chain.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-[2rem] border-[1.5px] border-neutral-300 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md sm:p-12">
              <h3
                className={cn(
                  storyHeadingFont.className,
                  "mb-6 text-4xl font-bold text-[#4a332a] border-b-[1.5px] border-[#4a332a]/30 pb-2 inline-block",
                )}
              >
                Vision
              </h3>
              <p
                className={cn(
                  storyBodyFont.className,
                  "text-lg leading-relaxed text-gray-700 sm:text-xl",
                )}
              >
                To be a trusted and sustainable bridge between coffee growers
                and the global market, empowering rural communities while
                delivering premium green coffee and commodities with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Quote Section */}
      <section className="bg-[#121212] overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left Column - Image */}
          <div className="relative h-[450px] lg:h-auto bg-neutral-800">
            <img
              src="/profile.jpg"
              alt="Muhammad Aslam Ayanki"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Right Column - Quote */}
          <div className="flex flex-col items-center justify-center p-10 sm:p-16 lg:p-24">
            <p
              className={cn(
                storyBodyFont.className,
                "text-2xl sm:text-3xl lg:text-[2.25rem] leading-relaxed text-gray-100 text-center mb-12",
              )}
            >
              "Rooted in Wayanad, Committed to the World - I stand for honest,
              traceable spices trade."
            </p>
            <div className="flex items-center gap-6 text-gray-400">
              <span className="h-[1px] w-12 sm:w-20 bg-gray-600"></span>
              <span
                className={cn(
                  storyHeadingFont.className,
                  "text-2xl sm:text-3xl text-gray-300 italic tracking-wide",
                )}
              >
                Muhammad Aslam Ayanki
              </span>
              <span className="h-[1px] w-12 sm:w-20 bg-gray-600"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-10 pb-5">
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
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Green Coffee Commoditys, Wayanad, Kerala, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2026 Green Coffee Commoditys. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
