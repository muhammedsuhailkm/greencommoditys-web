import { Link } from "@/components/Link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { CanvasText } from "@/components/ui/canvas-text";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <div className="relative flex w-full min-h-[60vh] mt-20 items-center justify-start overflow-hidden border border-transparent px-4 sm:px-8 lg:px-12 shadow ring-1 shadow-black/10 ring-black/5 dark:shadow-white/10 dark:ring-white/5">
        <h2
          className={cn(
            "group relative z-20 mr-auto ml-0 mt-0 max-w-2xl text-left text-4xl leading-tight font-bold tracking-tight text-balance text-neutral-600 sm:text-5xl md:text-6xl xl:text-7xl dark:text-neutral-700",
          )}
        >
          Pure From nature, crafted for royality.{" "}
          <div style={{ transform: "translateY(-5px)" }}>
            <span className="inline-flex flex-nowrap items-baseline whitespace-nowrap">
              <CanvasText
                text="Coffee"
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
                text=",cardomom&spices"
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

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[38%] max-w-[180px] sm:max-w-[220px] md:inset-0 md:w-auto md:max-w-none">
          <img
            src="/cofee.webp"
            alt="Decorative coffee visual 1"
            className="absolute top-2 right-[8%] w-16 h-auto object-contain sm:w-20 md:w-24"
          />
          <img
            src="/black.webp"
            alt="Decorative coffee visual 2"
            className="absolute top-[34%] right-[28%] h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16 md:right-[22%] md:h-20 md:w-20"
          />
          <img
            src="/card.webp"
            alt="Decorative coffee visual 3"
            className="absolute top-[70%] md:top-[60%] right-[6%] w-24 h-auto object-contain sm:w-32 md:w-36"
          />
        </div>
      </div>

      <ProductShowcaseSection />

      {/* Our Story Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef7ef_0%,#e6f4e6_100%)] px-6 pt-8 pb-12 lg:px-8 lg:pt-10 lg:pb-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <div className="mb-1 text-center sm:mb-3">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">
              Our Story
            </h2>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto sm:text-lg">
              Discover the journey behind Green Coffee Commoditys and how we've
              been committed to delivering excellence in every bean and spice.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-[16px] sm:rounded-[28px] border border-emerald-200/40 bg-gradient-to-br from-emerald-50 to-green-50/80 shadow-[0_25px_70px_-38px_rgba(22,101,52,0.25)] aspect-square flex items-center justify-center">
                <img
                  src="/placeholder.webp"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-black">
                  Crafted with Passion
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  From the lush coffee plantations to your cup, we believe in
                  quality, sustainability, and building lasting relationships
                  with our partners worldwide. Every product tells a story of
                  dedication and excellence.
                </p>
              </div>

              <Link
                href="/story"
                className="inline-flex items-center justify-center rounded-full bg-[#2f7d32] hover:bg-[#1e5a24] text-white font-semibold px-8 py-3 transition-colors w-fit"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link className="flex items-center gap-2 mb-6" href="/">
                <img src="/logorg.png" alt="Logo" className="h-12 w-auto" />
              </Link>
              <p className="text-gray-400 max-w-sm mb-8">
                Crafting meaningful journeys since 2025. Travel that connects,
                inspires, and respects.
              </p>
              <div className="flex gap-4">
                <Link
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors"
                  href="https://www.instagram.com/hulooltourism?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors"
                  href="https://www.facebook.com/p/Hulool-Tourism-61577107687880/"
                >
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors"
                  href="#"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xl text-white mb-6">
                {" "}
                Explore{" "}
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-gray-400 hover:text-cta transition-colors"
                    href="/about"
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-cta transition-colors"
                    href="/destinations"
                  >
                    {" "}
                    Destinations{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-cta transition-colors"
                    href="/services"
                  >
                    {" "}
                    Packages{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-cta transition-colors"
                    href="/blog"
                  >
                    {" "}
                    Blog{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xl text-white mb-6">
                {" "}
                Contact{" "}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <span>
                    {" "}
                    Doha Al Jadeed
                    <br />
                    Doha, Qatar{" "}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span> +974 72116464 </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span> hulooltourism@gmail.com </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {" "}
              © 2026 Hulool Tourism. All rights reserved.{" "}
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link className="hover:text-white transition-colors" href="#">
                {" "}
                Privacy Policy{" "}
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                {" "}
                Terms of Service{" "}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
