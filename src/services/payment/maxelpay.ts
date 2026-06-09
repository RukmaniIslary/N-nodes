import { PaymentGateway }
from "./types";

export class MaxelPayGateway
implements PaymentGateway {

 async createPayment(
  amount:number
 ){

  const publicKey =
   process.env
   .PAYMENT_PUBLIC_KEY;

  const secretKey =
   process.env
   .PAYMENT_SECRET_KEY;

  if(
   !publicKey ||
   !secretKey
  ){
   throw new Error(
    "Missing payment keys"
   );
  }

  return {
   amount
  };

 }

 async verifyPayment(){

  return true;

 }

}