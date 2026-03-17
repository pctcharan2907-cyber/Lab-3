import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your repo name (case-sensitive) when deploying on GitHub Pages
  base: "/Lab-3/",
  build: {
    outDir: 'docs'
  }
})
