import "./app.css";
import App from "./App.svelte";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3388";
axios.defaults.withCredentials = true;

const app = new App({
    target: document.getElementById("app"),
});

export default app;
