import { useState, useEffect } from 'react';
import getFeaturedProducts from '../api/product/featured-products';
import { NavigationButtons } from '../components/navigation/navigation-buttons';
import { Product } from '../components/product/product';
import ProductCard from '../components/product/product-card';
import Spinner from '../components/spinner';

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await getFeaturedProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch featured products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const getTranslateX = () => `translateX(-${currentIndex * (isMobile ? 100 : 33.33)}%)`;

  return (
    <div dir="ltr" className="w-full px-8 py-16 bg-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-center">מוצרים מובילים</h2>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {isLoading ? (
          <Spinner />
        ) : (
          <div 
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: getTranslateX() }}
          >
            {products.map((product) => (
              <div key={product.id} className={`flex-shrink-0 ${isMobile ? 'w-full' : 'w-1/3'}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
      {!isLoading && <NavigationButtons onPrev={prevProduct} onNext={nextProduct} />}
    </div>
  );
}
