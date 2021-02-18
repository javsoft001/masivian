import axios from "axios";

const comic = Math.round(Math.random() * 613 + 1);
const headers = {
  "Content-Type": "application/json;charset=UTF-8",
};

const clienteAxios = axios.create({
  baseURL: `https://xkcd.com/${comic}/info.0.json`,
  headers,
  mode: "no-cors",
});

export default clienteAxios;
