import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: path.resolve(__dirname),
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'pres-start-core': path.resolve(__dirname, '../../packages/pres-start-core/src'),
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})