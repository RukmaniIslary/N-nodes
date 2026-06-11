"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Sneakers", href: "/#shop" },
      { label: "Basketball", href: "/#shop" },
      { label: "Running", href: "/#shop" },
      { label: "Lifestyle", href: "/#shop" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Returns", href: "/#contact" },
      { label: "Size Guide", href: "/#contact" },
      { label: "Track Order", href: "/dashboard/orders" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign In", href: "/login" },
      { label: "Create Account", href: "/register" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
      border-t
      border-white/10
      bg-black/40
      backdrop-blur-xl
      mt-20
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2
              className="
              text-3xl
              font-black
              bg-gradient-to-r
              from-red-500
              via-pink-500
              to-blue-500
              text-transparent
              bg-clip-text
              "
            >
              N-Nodes
            </h2>

            <p className="text-gray-400 mt-4 max-w-sm">
              Premium sneakers, curated for collectors and athletes.
              Free worldwide shipping and a 30-day return guarantee on
              every order.
            </p>

            <div className="flex gap-3 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="
                    p-3
                    rounded-xl
                    bg-white/5
                    hover:bg-red-500
                    transition
                    "
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="
          mt-12
          pt-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          gap-4
          justify-between
          items-center
          text-sm
          text-gray-500
          "
        >
          <p>
            &copy; {new Date().getFullYear()} N-Nodes. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/#contact" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/#contact" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
