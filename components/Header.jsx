"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export function Header() {
  const navItems = [
    {
      name: "Our Story",
      link: "/our-story",
    },
    {
      name: "Our Products",
      link: "/#products",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavItems items={navItems} />
        <NavbarLogo />
        <div className="flex-1 flex items-center justify-end">
          <Link href="/contact-us">
            <Button
              borderRadius="1.75rem"
              containerClassName="h-10 w-28 md:w-32 mr-2"
              className="bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-100 border-emerald-200 dark:border-emerald-800 text-sm font-semibold"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <NavbarLogo />
          <div className="flex-1 flex items-center justify-end">
            <Link href="/contact-us">
              <Button
                borderRadius="1.75rem"
                containerClassName="h-8 w-24 mr-2"
                className="bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-100 border-emerald-200 dark:border-emerald-800 text-xs font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 font-bold font-nav uppercase tracking-wide dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 font-bold font-nav uppercase tracking-wide dark:text-neutral-300 mt-4"
          >
            <span className="block text-[#0ea5e9]">Contact Us</span>
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
