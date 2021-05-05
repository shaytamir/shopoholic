import http from "../../services/http/httpService";
// import { apiUrl } from "../../../config.json";
import { apiUrl } from "../../config.json";

/* get Products */
export function getProducts() {
  return http.get(`${apiUrl}/products`);
}

/* post Product */
export async function postProduct(value) {
  return await http.post(`${apiUrl}/products`, { value });
}

/* patch Product amount */ export function patchProductAmount(id) {
  return http.patch(`${apiUrl}/products/patch/amount/${id}`);
}

/* patch edit Product */
export async function patchProduct(value, id) {
  return await http.patch(`${apiUrl}/products/patch/${id}`, { value });
}

/* delete Product */
export function DeleteProduct(id) {
  return http.delete(`${apiUrl}/products/delete/${id}`);
}
