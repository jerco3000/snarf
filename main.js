import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

Vue.config.productionTip = false;

Vue.use(Ionic);

// Head para inyectar NO GOOGLE TRANSLATE
// <meta name="google" content="notranslate">
import VueHead from "vue-head";
Vue.use(VueHead);

// router
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
  //mode: "history",
  base: "/",
  routes: [
    { path: "/", redirect: "/slides" },
    {
      path: "/slides",
      name: "slides",
      component: () => import("@/components/Slides"),
    },
    {
      path: "/tabs",
      component: () => import("@/components/TabRoot.vue"),
      children: [
        {
          path: "sucursal",
          name: "sucursal",
          components: {
            tab1Route: () => import("@/components/Sucursal.vue"),
          },
        },
        {
          path: "carrocompra",
          name: "carrocompra",
          components: {
            tab2Route: () => import("@/components/CarroCompra5.vue"),
          },
        },
        {
          // path: "carrocompra/barcode1",
          path: "barcode1",
          name: "barcode1",
          components: {
            tab2Route: () => import("@/components/Barcode1.vue"),
          },
        },
        {
          // path: "carrocompra/barcode1",
          path: "barcode2",
          name: "barcode2",
          components: {
            tab2Route: () => import("@/components/Barcode2.vue"),
          },
        },
        {
          path: "tab3",
          name: "tab3",
          components: {
            tab3Route: () => import("@/components/Tab3.vue"),
          },
        },
      ],
    },
    /*
    { path: "/", redirect: "/slides" },
    {
      path: "/slides",
      name: "slides",
      component: () =>
          import("@/components/Slides"),
    },
    {
      path: "/sucursal",
      name: "sucursal",
      component: () =>
          import("@/components/Sucursal"),
    },
    {
      path: "/barcode1",
      name: "barcode1",
      component: () =>
          import("@/components/Barcode1"),
    },
    {
      path: "/barcoderesultado",
      name: "barcoderesultado",
      component: () =>
          import("@/components/BarcodeResultado"),
      params: true
    },
    {
      path: "/carrocompra3",
      name: "carrocompra3",
      component: () =>
          import("@/components/CarroCompra3"),
    },
    {
      path: "/carrocompra4",
      name: "carrocompra4",
      component: () =>
          import("@/components/CarroCompra4"),
    },
    {
      path: "/carrocompra5",
      name: "carrocompra5",
      component: () =>
          import("@/components/CarroCompra5"),
    },
    {
      path: "/simplemodal",
      name: "simplemodal",
      component: () =>
          import("@/components/SimpleModal"),
    },
    {
      path: "/tab",
      name: "tab",
      component: () =>
          import("@/components/tab"),
    }
 */
  ],
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
