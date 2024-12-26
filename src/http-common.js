import axios from "axios";

export default axios.create({
  baseURL: "http://213.250.129.246:8081/api",
  headers: {
    "Content-type": "application/json"
  }
});
