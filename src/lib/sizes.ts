/**
 * Standard US sneaker size run used as a fallback when a product
 * does not have explicit size/stock data configured in the database.
 *
 * This guarantees the size selector is always usable on the storefront.
 */
export const DEFAULT_SHOE_SIZES = [
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "13",
];

export interface SelectableSize {
  id: string;
  size: string;
  stock: number;
}

/**
 * Returns the list of sizes a customer can choose from.
 * Falls back to the default run (all in stock) when the product
 * has no configured sizes.
 */
export function resolveSizes(
  sizes?: { id: string; size: string; stock: number }[]
): SelectableSize[] {
  if (sizes && sizes.length > 0) {
    return sizes;
  }

  return DEFAULT_SHOE_SIZES.map((size) => ({
    id: `default-${size}`,
    size,
    stock: 10,
  }));
}
