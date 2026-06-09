import { create }
from "zustand";

interface CheckoutState{

 subtotal:number;

 setSubtotal:(
  value:number
 )=>void;

}

export const useCheckoutStore =
create<CheckoutState>(
(set)=>({

 subtotal:0,

 setSubtotal:(value)=>
 set({
  subtotal:value
 })

}));