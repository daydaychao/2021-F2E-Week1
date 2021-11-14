import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/2021-F2E-Week1/',
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    }
  },
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0'	// ← new content ←
  }
})