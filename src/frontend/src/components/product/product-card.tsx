import { ProductCardProps } from "./product";

export default function ProductCard({ product }: ProductCardProps) {
    return (
      <div className="w-full px-2 flex-shrink-0 cursor-pointer group">
        <div className="overflow-hidden rounded-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-lg text-gray-600">{product.price}</p>
        </div>
      </div>
    );
  }