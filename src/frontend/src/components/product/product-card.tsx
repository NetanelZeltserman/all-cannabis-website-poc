import Button from "../button";
import { ProductCardProps } from "./product";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ReactCountryFlag from "react-country-flag";

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
          <div className="flex justify-end space-x-2 my-2">
            {product.features.map((feature) => (
              <span
                key={feature.id}
                className="px-3 py-1 text-sm rounded-full text-white"
                style={{ backgroundColor: feature.color }}
              >
                {feature.name}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-medium text-right">{product.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600 flex items-center">
              <ReactCountryFlag countryCode={product.country.code} svg className="mr-2 rounded-full" style={{ width: '1em', height: '1em' }} />
              {product.country.name}
            </span>
            <span className="text-lg text-gray-600">
              {product.priceRange}
            </span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-gray-600">CBD {product.cbdRange}</span>
            <span className="text-gray-600">THC {product.thcRange}</span>
          </div>
          <div className="mt-4">
            <Button 
              buttonVariant="primary-outline" 
              className="w-full group-hover:bg-cannabisGreen-500 group-hover:text-white transition-colors duration-300"
            >
              <KeyboardArrowLeftIcon className="mr-2" />
              עמוד מוצר
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}