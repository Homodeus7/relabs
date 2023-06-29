import { defineStore } from "pinia";
import { store } from "@/store/pinia/store";
import main from "@/main";

export const useSocketStore = defineStore({
  id: "socket",
  state: () => ({
    isConnected: false,
    message: "",
    reconnectError: false,
    heartBeatInterval: 50000,
    heartBeatTimer: 0,
  }),
  actions: {
    SOCKET_ONOPEN(event) {
      console.log("successful websocket connection");
      main.config.globalProperties.$socket = event.currentTarget;
      this.isConnected = true;
      this.heartBeatTimer = window.setInterval(() => {
        const message = "Heartbeat message";
        this.isConnected &&
          main.config.globalProperties.$socket.sendObj({
            code: 200,
            msg: message,
          });
      }, this.heartBeatInterval);
    },
    SOCKET_ONCLOSE(event) {
      this.isConnected = false;
      window.clearInterval(this.heartBeatTimer);
      this.heartBeatTimer = 0;
      console.log("The line is disconnected: " + new Date());
      console.log(event);
    },
    SOCKET_ONERROR(event) {
      console.error(event);
    },
    SOCKET_ONMESSAGE(message) {
      console.log(message);
      const res = JSON.parse(message);
      this.message = res;
    },
    SOCKET_RECONNECT(count) {
      console.info("Message system reconnecting...", count);
    },
    SOCKET_RECONNECT_ERROR() {
      this.reconnectError = true;
    },
  },
});

// Need to be used outside the setup
export function useSocketStoreWithOut() {
  return useSocketStore(store);
}
