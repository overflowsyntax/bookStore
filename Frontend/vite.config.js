// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })








// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   server: {
//         host: true,  // Enables local network access
//         port: 3000,
        
//         open: true,}
// })






// for local web server

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  server: {
    host: true,  // Enables local network access
    port: 3000,  // Optional: Set a specific port (default is 5173)
    strictPort: true,
    open: true
  },
});


