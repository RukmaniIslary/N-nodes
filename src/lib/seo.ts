export function generateMetadata(
 title:string,
 description:string
){

 return {

  title,

  description,

  openGraph:{
   title,
   description
  },

  twitter:{
   title,
   description
  }

 };

}