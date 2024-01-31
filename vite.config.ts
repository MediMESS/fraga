import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// vite.config
// https://vitejs.dev/config/
export default defineConfig({
  base: "/fraga/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
