import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/aqilportfolio"
base: '/'
})


// export default defineConfig({
//   plugins: [react()],
//   base: '',
//   server: {
//     cors: true,
    
//     mimeTypes: {
//       'jsx': 'application/javascript', // JSX üçün MIME tipini düzəlt
      
//     }
//   },
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: 'index.html'
//     }
//   }
// })
