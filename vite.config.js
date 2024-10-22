import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust if needed
  build: {
    outDir: 'dist', // Default, ensure Render uses this
  },
})
