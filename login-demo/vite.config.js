import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Local-only: the dev server binds to localhost and is never exposed on the network.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { host: "localhost", port: 5173, strictPort: false },
  preview: { host: "localhost", port: 4173 },
});
