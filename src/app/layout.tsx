import CartDrawer
from "@/components/cart/CartDrawer";
import "./globals.css";

export const metadata = {
  title: "N-Nodes",
  description: "Universe",
};

export default function RootLayout({
  children,
}:{
  children:React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children} <CartDrawer />
      </body>
    </html>
  );
}