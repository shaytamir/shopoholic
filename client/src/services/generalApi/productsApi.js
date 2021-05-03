import http from "../../services/http/httpService";
// import { apiUrl } from "../../../config.json";
import { apiUrl } from "../../config.json";

/* get Products */
export function getProducts() {
  return http.get(`${apiUrl}/products`);
}

/* post Product */
export async function postProduct(value) {
  console.log(value);
  return await http.post(`${apiUrl}/products`, { value });
}

/* patch Product */
export async function patchProduct(value, id) {
  console.log(value);
  return await http.patch(`${apiUrl}/products/patch/${id}`, { value });
}

/* delete Product */
export function DeleteProduct(id) {
  console.log(id);
  return http.delete(`${apiUrl}/products/delete/${id}`);
}
