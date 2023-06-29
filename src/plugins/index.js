/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "../router";
import pinia from "../store";
import VueAwesomePaginate from "vue-awesome-paginate";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router).use(pinia).use(VueAwesomePaginate);
}
