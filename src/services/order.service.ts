import { prisma }
from "@/lib/prisma";

export async function createOrder(
 userId:string,
 total:number,
 items:any
){

 return prisma.order.create({

  data:{
   userId,
   total,
   items,
   status:"PENDING"
  }

 });

}