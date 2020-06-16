import { environment } from "./environments/environment";

export const REST_API_MAIN_ADDRESS = 'assets/http/';

let REST_API: string = "";

if (environment.production) {
  REST_API = "https://admin.sfc24.eu/";
}
else {
  REST_API = "http://localhost:8000/";
}

export const REST_API_GET_LISTS: string = REST_API + 'lists/';
// export const REST_API_GET_LISTS: string = REST_API_MAIN_ADDRESS +
// 'lists.json';
export const REST_API_GET_GALLERIES: string = REST_API_MAIN_ADDRESS +
                                              'galleries.json';
