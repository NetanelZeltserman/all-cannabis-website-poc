import { ProductCardProps } from "./product";

export default function ProductCard({ product }: ProductCardProps) {
    return (
      <div className="flex-shrink-0 w-full px-2 cursor-pointer group">
        <div className="overflow-hidden rounded-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-lg text-gray-600">{product.priceRange}</p>
        </div>
      </div>
    );
  }