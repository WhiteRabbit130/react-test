import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    preview: {
        host: '0.0.0.0',
        port: 3000
    },
    resolve: {
        alias: {
            "@": "/scr/",
            "@api": "/src/api",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@store": "/src/store",
            "@styles": "/src/styles",
            "@test": "/src/test",
        }
    }
})