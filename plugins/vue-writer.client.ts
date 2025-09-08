export default defineNuxtPlugin((nuxtApp) => {
  // Dynamically import vue-writer to avoid TypeScript issues
  import('vue-writer').then((VueWriter) => {
    nuxtApp.vueApp.use(VueWriter.default)
  })
})