import { NavigationButtons } from '../components/navigation/navigation-buttons';
import { Product } from '../components/product/product';
import ProductCard from '../components/product/product-card';
import { useState, useEffect } from 'react';

const products: Product[] = [
  { id: 1, name: 'טנגי קוש', image: 'https://cdn.jane.co.il/products/ee2a5d23-2de4-4677-b959-708884212ec4.jpg', price: '₪100 - ₪175' },
  { id: 2, name: 'אורלנדו מון', image: 'https://cdn.jane.co.il/products/68aacc10-523e-4ed2-b0f7-68a3fb04e15a.jpg', price: '₪145 - ₪199' },
  { id: 3, name: 'סולו 71', image: 'https://cdn.jane.co.il/products/37ba124a-9686-44e1-9d28-df1a5d45c7b1.jpg', price: '₪200' },
  { id: 4, name: 'ג\'י אם או', image: 'https://cdn.jane.co.il/products/1596a97d-a73f-4172-a308-a760efed58db.jpg', price: '₪120' },
  { id: 5, name: 'א.מ ספלינטר', image: 'https://cdn.jane.co.il/products/31239b14-f0fd-4d58-bacd-0e5a0b555506.jpg', price: '₪180' },
  { id: 6, name: 'אור', image: 'https://cdn.jane.co.il/products/d4d91ea2-5b0b-4869-b8e1-320a293a32d2.jpg', price: '₪180' },
];

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const TOTAL_PRODUCTS = products.length;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TOTAL_PRODUCTS);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TOTAL_PRODUCTS - 1 : prevIndex - 1
    );
  };

  return (
    <div dir="ltr" className="w-full py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">מוצרים מובילים</h2>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div 
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.33)}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className={`flex-shrink-0 ${isMobile ? 'w-full' : 'w-1/3'}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <NavigationButtons onPrev={prevProduct} onNext={nextProduct} />
    </div>
  );
}
