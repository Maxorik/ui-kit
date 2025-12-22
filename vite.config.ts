import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        react(),
        dts({ insertTypesEntry: true })
    ],
    server: {
      port: 9000
    },
    build: {
        lib: {
            entry: "src/components/index.ts",
            name: "velum-ui-kit",
            formats: ["es", "umd"],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
