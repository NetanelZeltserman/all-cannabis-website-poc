import type { Product } from "../../components/product/product";
import http, { API_URL } from "../http";

export default async function getProduct(slug: string) {
  const { data } = await http.get<Product>(`${API_URL}/api/products/${slug}`);

  return data;
}