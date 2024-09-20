import { ProductFeature } from "./product";

type Props = {
    features: ProductFeature[];
};
  
export default function ProductFeatures({ features }: Props) {
    return (
      <div className="flex justify-end space-x-2 my-2">
        {features.map((feature) => (
          <span
            key={feature.id}
            className="px-3 py-1 text-sm rounded-full text-white"
            style={{ backgroundColor: feature.color }}
          >
            {feature.name}
          </span>
        ))}
      </div>
    );
}