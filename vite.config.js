import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // bind to 0.0.0.0 so container network can reach it
    proxy: {
      '/doctors': {
        // When running in docker-compose the backend service is available at http://backend:4000
        target: process.env.FOR_DOCKER === '1' ? 'http://backend:4000' : 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
})
