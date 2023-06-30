import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    minifyIdentifiers: true,
    minifySyntax: true
  },
  plugins: [vue(), FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText]
})


