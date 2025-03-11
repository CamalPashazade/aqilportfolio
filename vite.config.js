import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/aqilportfolio"
   base: process.env.NODE_ENV === 'production' ? '/aqilportfolio/' : '/'
})
