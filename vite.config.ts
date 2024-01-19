import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// vite.config
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});