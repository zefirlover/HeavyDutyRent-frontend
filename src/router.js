import { createRouter, createWebHistory } from "vue-router";
import Advisor from "./components/Advisor.vue";
import ProductAlbum from './components/ProductAlbum.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/advisor",
      name: "Advisor",
      component: Advisor,
    },
    {
      path: "/",
      name: "ProductAlbum",
      component: ProductAlbum,
    },
  ],
});

export default router;
