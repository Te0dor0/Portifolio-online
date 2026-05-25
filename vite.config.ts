import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflareAdapter } from "@tanstack/react-start-plugin-adapters/cloudflare";

export default defineConfig({
  
  plugins: [
    TanStackRouterVite(),
    tanstackStart({ 
      server: { entry: "server" },
      deployment: cloudflareAdapter() 
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
