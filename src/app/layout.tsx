import type { Metadata } from "next";
import { Inter } from "next/font/google";

import CartDrawer from "@/components/cart/CartDrawer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "N-Nodes | Premium Sneaker Universe",
    template: "%s | N-Nodes",
  },
  description:
    "Shop premium, curated sneakers at N-Nodes. Basketball, running, lifestyle and skate icons with free worldwide shipping and 3D product views.",
  keywords: [
    "sneakers",
    "premium shoes",
    "Nike",
    "Jordan",
    "running shoes",
    "basketball shoes",
  ],
  openGraph: {
    title: "N-Nodes | Premium Sneaker Universe",
    description:
      "Shop premium, curated sneakers with free worldwide shipping and immersive 3D product views.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
