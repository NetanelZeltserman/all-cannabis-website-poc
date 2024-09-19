import http, { API_URL } from "../http";

export default async function getFeaturedProducts() {
  const { data } = await http.get(`${API_URL}/api/products/featured/`);

  return data;
}