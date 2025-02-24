import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: 3000,
  },
  preview: {
    host: "0.0.0.0", // Allow external access in preview mode
    port: 3000,
    allowedHosts: ["mekyek.com", "www.mekyek.com"], // Add your domain
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

