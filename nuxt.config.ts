// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
});
