import { Link } from "@/components/Link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { CanvasText } from "@/components/ui/canvas-text";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const storyHeadingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const storyBodyFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <div>
      <div className="relative flex w-full min-h-[60vh] mt-20 items-center justify-start overflow-hidden border border-transparent px-4 sm:px-8 lg:px-12 shadow ring-1 shadow-black/10 ring-black/5 dark:shadow-white/10 dark:ring-white/5">
        <h2
          className={cn(
            "group relative z-20 mr-auto ml-0 mt-0 max-w-2xl text-left text-4xl leading-tight font-bold tracking-tight text-balance text-neutral-600 sm:text-5xl md:text-6xl xl:text-7xl dark:text-neutral-700",
          )}
        >
          Pure From nature, crafted for royalty.{" "}
          <div
            style={{ transform: "translateY(-5px)" }}
            className="mt-2 sm:mt-4"
          >
            <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-3">
              <CanvasText
                text="Coffee ,"
                backgroundClassName="bg-[#6f4a32] dark:bg-[#5b3924]"
                colors={[
                  "rgba(61, 37, 20, 1)",
                  "rgba(87, 54, 30, 1)",
                  "rgba(111, 74, 50, 1)",
                  "rgba(138, 94, 62, 1)",
                  "rgba(168, 121, 84, 0.95)",
                  "rgba(138, 94, 62, 1)",
                  "rgba(111, 74, 50, 1)",
                  "rgba(87, 54, 30, 1)",
                  "rgba(61, 37, 20, 1)",
                  "rgba(41, 24, 12, 0.95)",
                ]}
                lineGap={1.5}
                animationDuration={20}
              />
              <CanvasText
                text="cardamom & spices "
                backgroundClassName="bg-green-600 dark:bg-green-700"
                colors={[
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.9)",
                  "rgba(34, 197, 94, 0.8)",
                  "rgba(34, 197, 94, 0.7)",
                  "rgba(34, 197, 94, 0.6)",
                  "rgba(34, 197, 94, 0.5)",
                  "rgba(34, 197, 94, 0.4)",
                  "rgba(34, 197, 94, 0.3)",
                  "rgba(34, 197, 94, 0.2)",
                  "rgba(34, 197, 94, 0.1)",
                ]}
                lineGap={1}
                animationDuration={20}
              />
            </span>
          </div>
        </h2>

        <DottedGlowBackground
          className="pointer-events-none absolute inset-0"
          opacity={1}
          gap={10}
          radius={1.6}
          color="#86efac"
          glowColor="#4ade80"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-[45%] max-w-[180px] items-center justify-center sm:max-w-[250px] md:max-w-[320px] lg:pr-10">
          <div className="relative h-[250px] w-full sm:h-[350px] md:h-[450px]">
            <img
              src="/cofee.webp"
              alt="Decorative coffee visual 1"
              className="absolute right-[10%] top-[5%] h-auto w-16 object-contain drop-shadow-xl sm:w-24 md:w-32"
            />
            <img
              src="/black.webp"
              alt="Decorative coffee visual 2"
              className="absolute right-[45%] top-[35%] h-16 w-16 -rotate-6 rounded-2xl object-cover shadow-2xl sm:h-24 sm:w-24 md:h-32 md:w-32"
            />
            <img
              src="/card.webp"
              alt="Decorative coffee visual 3"
              className="absolute bottom-[12%] right-[15%] h-auto w-20 rotate-12 object-contain drop-shadow-xl sm:w-28 md:w-40"
            />
          </div>
        </div>
      </div>

      <ProductShowcaseSection />

      {/* Our Story Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef7ef_0%,#e6f4e6_100%)] px-6 pt-6 pb-8 lg:px-8 lg:pt-8 lg:pb-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <div className="mb-1 text-center sm:mb-3">
            <h2
              className={`${storyHeadingFont.className} text-3xl font-semibold tracking-tight text-black sm:text-5xl`}
            >
              Our Story
            </h2>
            <p
              className={`${storyBodyFont.className} mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg`}
            >
              Discover the journey behind Green Coffee Commoditys and how we've
              been committed to delivering excellence in every bean and spice.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[16px] border border-emerald-200/40 bg-white shadow-[0_20px_55px_-35px_rgba(0,0,0,0.28)] aspect-[16/10]">
                <img
                  src="/cofe1.webp"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="space-y-4">
                <h3
                  className={`${storyHeadingFont.className} text-2xl font-semibold text-black sm:text-3xl`}
                >
                  Crafted with Passion
                </h3>
                <p
                  className={`${storyBodyFont.className} text-base leading-relaxed text-gray-700 sm:text-lg`}
                >
                  From the lush coffee plantations to your cup, we believe in
                  quality, sustainability, and building lasting relationships
                  with our partners worldwide. Every product tells a story of
                  dedication and excellence.
                </p>
              </div>

              <Link href="/story" className="w-fit">
                <Button
                  borderRadius="1.75rem"
                  className={`${storyBodyFont.className} border-[#86efac] bg-[#dcfce7] px-8 py-3 font-semibold text-[#166534]`}
                >
                  Read Our Story
                </Button>
              </Link>
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
