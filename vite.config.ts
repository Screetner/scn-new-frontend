import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
