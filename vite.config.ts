import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: "**/*.svg?react"
        }),
        dts({
            insertTypesEntry: true,
            beforeWriteFile: (filePath, content) => {
                if (filePath.endsWith('style.d.ts')) {
                    return false;
                }
            }
        })
    ],
    server: {
      port: 9000
    },
    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, 'src/components/index.ts'),
                style: path.resolve(__dirname, 'src/style.ts')
            },
            name: "velumUIkit",
            formats: ["es"],
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
        },
        outDir: 'dist'
    }
});
