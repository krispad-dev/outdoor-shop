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
        target: 'http://localhost:7000/',
        changeOrigin: true,
        secure: false,
      }
    }
  },

})

