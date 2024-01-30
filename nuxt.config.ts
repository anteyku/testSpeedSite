// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [`@/css/style.min.css`, `@/css/aos.css`, `@/css/swiper-bundle.min.css` ],
  // nuxt-snackbar                         - всплывающие сообщения снизу справа окна
  modules: ['nuxt-snackbar', `nuxt-csurf`, `nuxt-icon`, '@nuxtjs/robots'],
  // Настройка csurf
  csurf: { // optional
    https: false, // default true if in production
    cookieKey: '', // "__Host-csrf" if https is true otherwise just "csrf"
    cookie: { // CookieSerializeOptions from unjs/cookie-es
      path: '/',
      httpOnly: true,
      sameSite: 'strict'
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'] // the request methods we want CSRF protection for
  }, 
  // Настройки всплывающих окон
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000
  },
  app: {
    // Общий заголовок сайта
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', async: true, defer: true },
        { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', async: true, defer: true },
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js', async: true, defer: true }
      ],
    }
  }
})
