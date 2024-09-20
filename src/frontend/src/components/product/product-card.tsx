import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProductFeatures from "./product-features";
import ProductDetails from "./product-details";
import { ProductCardProps } from "./product";
import Button from "../button";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex-shrink-0 w-full px-2 cursor-pointer group">
      <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-white">
          <ProductFeatures features={product.features} />
          <h3 className="text-2xl font-medium text-right">{product.name}</h3>
          <ProductDetails
            country={product.country}
            priceRange={product.priceRange}
            cbdRange={product.cbdRange}
            thcRange={product.thcRange}
          />
          <ProductButton />
        </div>
      </div>
    </div>
  );
}

function ProductButton() {
  return (
    <div className="mt-4">
      <Button 
        buttonVariant="primary-outline" 
        className="w-full group-hover:bg-cannabisGreen-500 group-hover:text-white transition-colors duration-300"
      >
        <KeyboardArrowLeftIcon className="mr-2" />
        עמוד מוצר
      </Button>
    </div>
  );
}