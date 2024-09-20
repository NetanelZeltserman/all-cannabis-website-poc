import type { Product } from "../../components/product/product";
import http, { API_URL } from "../http";

type ProductsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

export default async function getProducts(page: number) {
  const { data } = await http.get<ProductsResponse>(`${API_URL}/api/products/?page=${page}`);

  return data;
}