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
        { src: '/js/swiper-bundle.min.js', async: true, defer: true },
        { src: '/js/aos.js', async: true, defer: true },
        { src: '/js/jquery.min.js', async: true, defer: true }
      ],
    }
  }
})
