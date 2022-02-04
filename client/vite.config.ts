import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../app/public',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://nature-shop.herokuapp.com/',
        changeOrigin: true,
        secure: false,
      }
    }
  },

})

