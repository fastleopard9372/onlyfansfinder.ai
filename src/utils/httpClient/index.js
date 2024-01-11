import axios from "axios";
import "dotenv/config";
const BASEURL = process.env.NEXT_PUBLIC_SERVER_URL + "/api/users";
const TIMEOUTMSG = "Waiting for too long...Aborted !";
const config = {
  baseURL: BASEURL,
  timeout: 20000,
  timeoutErrorMessage: TIMEOUTMSG
};

// config.headers["cache-control"] = `no-cache`;
const http = axios.create(config);

export default http;
