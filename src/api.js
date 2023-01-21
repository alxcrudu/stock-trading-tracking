import axios from "axios";

// ! .env to be made to work
const API_KEY = process.env.React_App_Finhub_API || "cf46u2iad3i94dsnnne0cf46u2iad3i94dsnnneg";
const baseUrl = "https://finnhub.io/api/v1/";

export const searchQuery = async (query) => {
  axios
    .get(`${baseUrl}search?q=${query}&token=${API_KEY}`)
    .then((res) => {
      return res.data.result;
    })
    .catch((err) => console.log(err))
}