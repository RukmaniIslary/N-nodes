import ProductForm from "@/app/admin/ProductForm";

export default function NewProductPage() {

  return (

    <div className="p-10">

      <h1
        className="
        text-4xl
        font-black
        mb-10
        "
      >
        New Product
      </h1>

      <ProductForm />

    </div>

  );

}