export function getDiscountPrice(price:number){

  const savings = 30;

  return {
    marketPrice: price,
    discountPrice: price - savings,
    savings
  };

}