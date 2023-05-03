import ProductCard from "./ProductCard";
export default function ProductTable({ products }) {
  return (
    <div className="flex flex-wrap p-4 gap-5 justify-center">
      {products.map((product) => {
        return <ProductCard key={product.uuid} {...{ product }} />;
      })}
    </div>
  );
}
