import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [ react() ],
    css: {
        modules: {
            scopeBehaviour: 'local'
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/styles/mixin.scss";`
            }
        }
    },
    server: {
        port: 8879
    },
    build: {
        outDir: "docs"
    }
})
