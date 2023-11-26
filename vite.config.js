import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },/*
  server: {
    //port: 5267,
    proxy: {
      '/api': {
        target: 'http://localhost:5267/',  // This should be the URL of your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },*/
  devServer: {
    proxy: "http://localhost/api",
    port: 5267
  }
})
