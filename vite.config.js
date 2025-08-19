import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'INAI Worlds',
          description: 'India\'s First AI Virtual Model',
        },
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    minify: 'terser',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true
  },
  server: {
    historyApiFallback: true,
  },
  define: {
    'process.env': {}
  }
})
