import type { Country } from "../country/country";

export type ProductFeature = {
    id: number;
    name: string;
    color: string;
};

export type Product = {
    id: number;
    name: string;
    slug: string;
    priceRange: string;
    thcRange: string;
    cbdRange: string;
    country: Country;
    inStock: boolean;
    image: string;
    features: ProductFeature[];
};

export type ProductCardProps = {
    product: Product;
}