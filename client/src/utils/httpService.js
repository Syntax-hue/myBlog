import axios from "axios";
import { toast } from "react-toastify";

const API = "http://127.0.0.1:5000/";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error(error.message || error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  API,
};
