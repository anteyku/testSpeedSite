// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [`bootstrap/dist/css/bootstrap-grid.min.css`, '~/assets/css/normalaiz.css', 'vant/lib/index.css', `vue3-snackbar/dist/style.css`],
    modules: [`@nuxtjs/google-fonts`, '@nuxt/image-edge', 'nuxt-swiper'],
    googleFonts: {
      // Здесь пишем названияя шрифта и его ширину которую хотим подключить
      families: {
        "Roboto": [100, 300, 400, 500, 700, 900],
        "Inter": [100,200,300,400,500,600,700,800,900]
      }
    },
    build: { transpile: [`vant`] }
  
    /*
    app: {
      baseURL: "/" 
    },
    */
})
