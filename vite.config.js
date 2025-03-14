import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <- Match the GitHub repo name
  // server: {
  //   cors: true,
  //   mimeTypes: {
  //     'jsx': 'application/javascript'
  //   }
  // },
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: 'index.html'
  //   }
  // }
})
