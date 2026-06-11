import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SIZE_RUN = [
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const productData = [
  {
    name: "Nike Air Jordan 1",
    slug: "nike-air-jordan-1",
    description:
      "The icon that started it all. Premium leather build with timeless basketball heritage.",
    price: 200,
    image: "/shoes/jordan1.png",
    stock: 50,
    category: "Basketball",
    featured: true,
  },
  {
    name: "Nike Dunk Low",
    slug: "nike-dunk-low",
    description:
      "A streetwear icon with crisp overlays and everyday comfort.",
    price: 200,
    image: "/shoes/dunklow.png",
    stock: 40,
    category: "Lifestyle",
  },
  {
    name: "Nike Air Force 1",
    slug: "nike-air-force-1",
    description:
      "The classic everyday sneaker with legendary Air cushioning.",
    price: 200,
    image: "/shoes/airforce1.png",
    stock: 60,
    category: "Lifestyle",
  },
  {
    name: "Nike Jordan 4",
    slug: "nike-jordan-4",
    description:
      "A luxury retro silhouette with bold lines and premium materials.",
    price: 200,
    image: "/shoes/jordan4.png",
    stock: 25,
    category: "Basketball",
  },
  {
    name: "Nike Pegasus",
    slug: "nike-pegasus",
    description:
      "Responsive running performance built for daily miles.",
    price: 200,
    image: "/shoes/pegasus.png",
    stock: 35,
    category: "Running",
  },
  {
    name: "Nike React Infinity",
    slug: "nike-react-infinity",
    description:
      "Smooth, stable cushioning designed to help reduce injury.",
    price: 200,
    image: "/shoes/react.png",
    stock: 30,
    category: "Running",
  },
  {
    name: "Nike ZoomX Vaporfly",
    slug: "nike-zoomx-vaporfly",
    description:
      "Elite race-day speed with featherweight ZoomX foam.",
    price: 200,
    image: "/shoes/vaporfly.png",
    stock: 20,
    category: "Running",
  },
  {
    name: "Nike SB Dunk",
    slug: "nike-sb-dunk",
    description:
      "Skate-ready durability with iconic SB styling.",
    price: 200,
    image: "/shoes/sbdunk.png",
    stock: 28,
    category: "Skate",
  },
];

async function main() {
  for (const product of productData) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...product,
        sizes: {
          create: SIZE_RUN.map((size) => ({
            size,
            stock: 10,
          })),
        },
      },
    });
  }

  console.log("Seed complete");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
