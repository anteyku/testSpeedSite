import { defineNuxtPlugin } from '#app';
import { Lazyload } from 'vant';
import { Overlay } from 'vant';
import { Icon } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { Button } from 'vant';
//import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Lazyload);
  nuxtApp.vueApp.use(Overlay);
  nuxtApp.vueApp.use(Icon);
  nuxtApp.vueApp.use(Form);
  nuxtApp.vueApp.use(Field);
  nuxtApp.vueApp.use(CellGroup);
  nuxtApp.vueApp.use(Button);
 // nuxtApp.vueApp.use(SnackbarService);
 // nuxtApp.vueApp.component("vue3-snackbar", Vue3Snackbar)
});