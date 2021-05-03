import http from "../../services/http/httpService";
// import { apiUrl } from "../../../config.json";
import { apiUrl } from "../../config.json";

/* get Hobbies */
export function getProducts() {
  return http.get(`${apiUrl}/products`);
}

/* post Skills */
// export async function postHobbie(value) {
//   console.log(value);
//   return await http.post(`${apiUrl}/general/hobbie`, { value });
// }
