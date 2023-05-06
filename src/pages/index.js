import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import ProductTable from "../components/ProductTable";
import When from "@/components/When";
import Spinner from "@/components/Spinner";
import Border from "@/components/Border";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch(`/api/homeLoans?page=${currentPage}`);
        const data = await response.json();
        const { hits } = data;
        const uniqueProducts = [];

        for (let i = 0; i < hits.length; i++) {
          const product = hits[i];
          const index = uniqueProducts.findIndex(
            (p) => p.companySlug === product.companySlug
          );
          if (index === -1) {
            uniqueProducts.push(product);
          } else {
            if (product.advertisedRate < uniqueProducts[index].advertisedRate) {
              uniqueProducts[index] = product;
            }
          }
        }
        setProducts(uniqueProducts);
        setPageCount(data.meta.pageCount);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        throw new Error(error);
      }
    }
    fetchProducts();
  }, [currentPage]);
  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <When isTrue={loading}>
        <div className="h-screen w-screen flex flex-row items-center justify-center">
          <div className="flex flex-col">
            <Spinner spinning={loading} />
          </div>
        </div>
      </When>
      <When isTrue={!loading}>
        <div className="container mx-auto px-4 mb-4 flex flex-col">
          <div className="py-3 self-end">
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h1 className="text-2xl font-bold text-neutral-600 text-center mt-6 mb-2">
              Top Home Loan Products
            </h1>
            <div className=" px-4 md:px-12 mb-2">
              <Border />
            </div>
            <ProductTable products={products} />
          </div>
        </div>
      </When>
    </div>
  );
}
