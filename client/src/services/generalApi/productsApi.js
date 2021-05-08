import http from "../../services/http/httpService";
// import { apiUrl } from "../../../config.json";
import { apiUrl } from "../../config.json";

/* get Products */
export function getProducts() {
  return http.get(`${apiUrl}/products`);
}

/* post Product */
export function postProduct(value) {
  return http.post(`${apiUrl}/products`, { value });
}

/* patch Product amount */ export function patchProductAmount(id, action) {
  return http.patch(`${apiUrl}/products/patch/amount/${id}`, { action });
}

/* patch Product */
export function patchProduct(value, id) {
  return http.patch(`${apiUrl}/products/patch/${id}`, { value });
}

/* patch purchase Product */
export function patchPurchaseProduct(id) {
  return http.patch(`${apiUrl}/products/patch/purchase/${id}`);
}

/* delete Product */
export function DeleteProduct(id) {
  return http.delete(`${apiUrl}/products/delete/${id}`);
}
