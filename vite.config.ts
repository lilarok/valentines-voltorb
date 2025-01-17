import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/valentines-voltorb/",
  server: {
    port: 5173,
  },
});
