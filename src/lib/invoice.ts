import jsPDF
from "jspdf";

export function generateInvoice(
 orderId:string,
 total:number
){

 const pdf =
  new jsPDF();

 pdf.text(
  `Order: ${orderId}`,
  20,
  20
 );

 pdf.text(
  `Total: $${total}`,
  20,
  40
 );

 pdf.save(
  `invoice-${orderId}.pdf`
 );

}