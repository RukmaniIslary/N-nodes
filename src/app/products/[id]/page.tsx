import Image from "next/image";
import Link from "next/link";

import { prisma } from "@/lib/prisma";

import AddToCartButton from "@/components/products/AddToCartButton";
import WishlistButton from "@/components/products/WishlistButton";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product =
    await prisma.product.findUnique({
      where: {
        id,
      },
    });

  if (!product) {
    return (
      <div className="p-20 text-center">
        Product not found
      </div>
    );
  }

  const related =
    await prisma.product.findMany({
      where: {
        category: product.category,
        NOT: {
          id: product.id,
        },
      },
      take: 4,
    });

  return (
    <div className="max-w-7xl mx-auto px-8 py-32">

      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT */}

        <div
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            className="
            object-contain
            mx-auto
            "
          />
        </div>

        {/* RIGHT */}

        <div>

          <span
            className="
            bg-red-500
            px-4
            py-2
            rounded-full
            text-sm
            "
          >
            Premium Sneaker
          </span>

          <h1
            className="
            text-6xl
            font-black
            mt-6
            "
          >
            {product.name}
          </h1>

          <p
            className="
            text-gray-400
            mt-6
            text-lg
            "
          >
            {product.description}
          </p>

          <div className="mt-10">

            <div
              className="
              line-through
              text-gray-500
              text-xl
              "
            >
              $200
            </div>

            <div
              className="
              text-red-400
              text-6xl
              font-black
              "
            >
              ${product.price}
            </div>

            <div
              className="
              text-green-400
              mt-2
              "
            >
              Save $30
            </div>

          </div>

          <div className="mt-10 flex gap-4">

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
              }}
            />

            <WishlistButton
              id={product.id}
            />

          </div>

          <div
            className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            "
          >
            <h3 className="font-bold mb-4">
              Specifications
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Premium Construction</li>
              <li>Luxury Comfort Sole</li>
              <li>Breathable Upper Mesh</li>
              <li>Advanced Cushioning</li>
              <li>
                Stock Available: {product.stock}
              </li>
              <li>
                Category: {product.category}
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* RELATED */}

      {related.length > 0 && (
        <div className="mt-24">

          <h2
            className="
            text-4xl
            font-black
            mb-10
            "
          >
            Related Sneakers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {related.map((shoe) => (

              <Link
                key={shoe.id}
                href={`/product/${shoe.id}`}
              >

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-5
                  hover:-translate-y-2
                  transition
                  "
                >

                  <Image
                    src={shoe.image}
                    alt={shoe.name}
                    width={400}
                    height={400}
                  />

                  <h3 className="mt-4 font-bold">
                    {shoe.name}
                  </h3>

                  <div className="text-red-400">
                    ${shoe.price}
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>
      )}

    </div>
  );
}