import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Nike Air Jordan 1",
        slug: "nike-air-jordan-1",
        description: "Premium basketball sneaker",
        price: 170,
        image: "/public/shoes/jordan1.png",
        stock: 50,
        category: "Basketball",
      },
      {
        name: "Nike Dunk Low",
        slug: "nike-dunk-low",
        description: "Streetwear icon",
        price: 170,
        image: "/public/shoes/dunklow.png",
        stock: 40,
        category: "Lifestyle",
      },
      {
        name: "Nike Air Force 1",
        slug: "nike-air-force-1",
        description: "Classic everyday sneaker",
        price: 170,
        image: "/public/shoes/airforce1.png",
        stock: 60,
        category: "Lifestyle",
      },
      {
        name: "Nike Jordan 4",
        slug: "nike-jordan-4",
        description: "Luxury retro sneaker",
        price: 170,
        image: "/public/shoes/jordan4.png",
        stock: 25,
        category: "Basketball",
      },
      {
        name: "Nike Pegasus",
        slug: "nike-pegasus",
        description: "Running performance shoe",
        price: 170,
        image: "/public/shoes/pegasus.png",
        stock: 35,
        category: "Running",
      }
    ]
  });

  console.log("Seed complete");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });