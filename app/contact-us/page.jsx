"use client";
import { Link } from "@/components/Link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { useState } from "react";

const storyHeadingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const storyBodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const countryCodes = [
  "+1", "+7", "+20", "+27", "+30", "+31", "+32", "+33", "+34", "+36", "+39", "+40", "+41", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+51", "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+60", "+61", "+62", "+63", "+64", "+65", "+66", "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94", "+95", "+98", "+212", "+213", "+216", "+218", "+220", "+234", "+254", "+255", "+256", "+351", "+353", "+358", "+359", "+372", "+373", "+374", "+375", "+380", "+381", "+385", "+420", "+421", "+502", "+503", "+504", "+505", "+506", "+507", "+509", "+852", "+853", "+855", "+856", "+880", "+886", "+961", "+962", "+963", "+964", "+965", "+966", "+968", "+971", "+972", "+973", "+974", "+977"
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+1",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: `${form.phoneCode} ${form.phoneNumber}`,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phoneCode: "+1",
          phoneNumber: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Failed to send ❌");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#eaf4fb]">
      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center py-10 px-4 lg:px-8 mt-12 lg:mt-16">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Text Details */}
          <div className="space-y-10">
            <div className="space-y-5">
              <h1
                className={cn(
                  storyHeadingFont.className,
                  "text-5xl lg:text-7xl font-black text-[#1a2f24] tracking-tight",
                )}
              >
                Contact Us
              </h1>
              <p
                className={cn(
                  storyBodyFont.className,
                  "text-base lg:text-lg text-gray-700 max-w-sm leading-relaxed",
                )}
              >
                Email, call, or complete the form to learn how Greend Commoditys
                can support your sourcing and trade needs.
              </p>
            </div>

            <div className="space-y-3">
              <p
                className={cn(
                  storyBodyFont.className,
                  "text-lg font-semibold text-[#1a2f24]",
                )}
              >
                info@greencommoditys.com
              </p>
              <p
                className={cn(
                  storyBodyFont.className,
                  "text-lg font-semibold text-[#1a2f24]",
                )}
              >
                INDIA +91 7558963712
              </p>
              <p
                className={cn(
                  storyBodyFont.className,
                  "text-lg font-semibold text-[#1a2f24]",
                )}
              >
                SAUDI +966 559407752
              </p>
              <p
                className={cn(
                  storyBodyFont.className,
                  "text-base font-semibold underline text-[#1a2f24] cursor-pointer pt-2",
                )}
              >
                Customer Support
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              <div className="space-y-2">
                <h3
                  className={cn(
                    storyBodyFont.className,
                    "font-bold text-[#1a2f24] text-base",
                  )}
                >
                  Customer Support
                </h3>
                <p
                  className={cn(
                    storyBodyFont.className,
                    "text-xs text-gray-600 leading-relaxed",
                  )}
                >
                  Our support team is available around the clock to address any
                </p>
              </div>
              <div className="space-y-2">
                <h3
                  className={cn(
                    storyBodyFont.className,
                    "font-bold text-[#1a2f24] text-base",
                  )}
                >
                  Feedback and Suggestions
                </h3>
                <p
                  className={cn(
                    storyBodyFont.className,
                    "text-xs text-gray-600 leading-relaxed",
                  )}
                >
                  We value your feedback and are continuously working to improve
                </p>
              </div>
              <div className="space-y-2">
                <h3
                  className={cn(
                    storyBodyFont.className,
                    "font-bold text-[#1a2f24] text-base",
                  )}
                >
                  Media Inquiries
                </h3>
                <p
                  className={cn(
                    storyBodyFont.className,
                    "text-xs text-gray-600 leading-relaxed",
                  )}
                >
                  For media-related questions or press inquiries, please contact
                  us at info@greencommoditys.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
            <div className="mb-6">
              <h2
                className={cn(
                  storyHeadingFont.className,
                  "text-3xl font-bold text-[#1a2f24] mb-1",
                )}
              >
                Get in Touch
              </h2>
              <p className={cn(storyBodyFont.className, "text-sm text-gray-500")}>
                You can reach us anytime
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className={cn(
                    storyBodyFont.className,
                    "w-full text-sm border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  )}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className={cn(
                    storyBodyFont.className,
                    "w-full text-sm border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  )}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    storyBodyFont.className,
                    "w-full text-sm border border-gray-200 rounded-full pl-10 pr-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  )}
                />
              </div>

              <div className="flex gap-3">
                <div className="w-[100px] relative shrink-0">
                  <select
                    name="phoneCode"
                    value={form.phoneCode}
                    onChange={handleChange}
                    className={cn(
                      storyBodyFont.className,
                      "w-full text-sm border border-gray-200 rounded-full pl-4 pr-7 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all cursor-pointer",
                    )}
                  >
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    <svg
                      className="fill-current h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className={cn(
                    storyBodyFont.className,
                    "flex-1 text-sm border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  )}
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help?"
                value={form.message}
                onChange={handleChange}
                required
                className={cn(
                  storyBodyFont.className,
                  "w-full text-sm border border-gray-200 rounded-[1.5rem] px-5 py-4 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                )}
              />

              <button
                type="submit"
                className={cn(
                  storyBodyFont.className,
                  "w-full bg-[#0d6efd] hover:bg-[#0b5ed7] text-white text-base font-semibold rounded-full py-3 transition-colors",
                )}
              >
                Submit
              </button>

              {status && (
                <p className="text-center text-sm font-medium mt-3">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>

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
