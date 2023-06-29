/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Tailwind
import "./assets/index.css";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { useSocketStoreWithOut } from "@/store/pinia/useSocketStore";
import VueNativeSock from "vue-native-websocket-vue3";
const piniaSocketStore = useSocketStoreWithOut();

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

app.use(VueNativeSock, "wss://test.relabs.ru/event", {
  store: piniaSocketStore,
  format: "json",
  connectManually: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});
export default app;
