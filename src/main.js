import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 重置
import "normalize.css";
// tailwind
import "./assets/style/input.css";

// mircoApp 导入
import microApp from "@micro-zoe/micro-app";
import { setTimeout } from "core-js";
microApp.start();

const app = createApp(App);

app.use(router).mount("#app");

// 移除 loading DOM
const loading = document.getElementById("global-loading");
if (loading) {
  setTimeout(() => {
    loading.parentNode?.removeChild(loading);
  }, 500);
}
