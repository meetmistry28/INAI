import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
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
