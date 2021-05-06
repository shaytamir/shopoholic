import http from "../http/httpService";
// import { apiUrl } from "../../../config.json";
import { apiUrl } from "../../config.json";

/* post Purchase */
export function postPurchase(value) {
  console.log(value);
  return http.post(`${apiUrl}/purchase`, { value });
}
