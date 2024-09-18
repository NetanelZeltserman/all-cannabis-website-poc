export type Product = {
    id: number;
    name: string;
    image: string;
    price: string | number;
}

export type ProductCardProps = {
    product: Product;
}