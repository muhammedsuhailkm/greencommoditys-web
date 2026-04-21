"use client";
import { Link } from "@/components/Link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { CanvasText } from "@/components/ui/canvas-text";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Failed to send ❌");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded h-32"
        />

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}

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
