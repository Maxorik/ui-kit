import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
      port: 9000
    },
    build: {
        lib: {
            entry: "src/components/index.ts",
            name: "velum-ui-kit",
            formats: ["es", "umd"],
            fileName: (format) => `ui-kit.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
        }
    }
});
