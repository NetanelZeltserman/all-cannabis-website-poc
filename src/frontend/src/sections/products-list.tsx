import ProductCard from '../components/product/product-card';
import { Product } from '../components/product/product';
import getProducts from '../api/product/products';
import Spinner from '../components/spinner';
import { useState, useEffect } from 'react';
import Pagination from '../components/pagination';


export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await getProducts(currentPage);
        setProducts(fetchedProducts.results);
        setTotalPages(Math.ceil(fetchedProducts.count / fetchedProducts.results.length));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div dir="ltr" className="w-full px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">מוצרים</h2>
      <p className="mb-8 text-center text-gray-600">כל מוצרי הקנאביס הרפואי הזמינים לרכישה כרגע בכל בתי המרקחת בארץ</p>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
}
