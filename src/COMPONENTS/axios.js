import axios from "axios";

const instance = axios.create({
  baseURL:"http://localhost:5001/clone-addf3/us-central1/api"
});
console.log(instance);
export default instance;
