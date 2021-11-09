import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_APP_BASE_API,
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    }
  },
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0'	// ← new content ←
  }
})
