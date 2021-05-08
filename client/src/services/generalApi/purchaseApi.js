import http from "../http/httpService";
import { apiUrl } from "../../config.json";

/* get Purchase */
export function getPurchase() {
  return http.get(`${apiUrl}/purchase/all`);
}

/* post Purchase */
export function postPurchase(value) {
  return http.post(`${apiUrl}/purchase`, { value });
}
