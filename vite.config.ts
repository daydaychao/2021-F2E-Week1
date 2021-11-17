import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
        "@root/": `${path.resolve(__dirname, "/")}`,
      }
    },
    server: {				// ← ← ← ← ← ←
      host: '0.0.0.0'	// ← new content ←
    }
  })
}