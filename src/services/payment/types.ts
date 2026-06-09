export interface PaymentGateway {

 createPayment(
  amount:number
 ):Promise<any>;

 verifyPayment(
  payload:any
 ):Promise<boolean>;

}