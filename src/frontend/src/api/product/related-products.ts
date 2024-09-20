import http, { API_URL } from "../http";

export default async function getRelatedProducts(productId: string) {
  const { data } = await http.get(`${API_URL}/api/products/${productId}/related/`);

  return data;
}