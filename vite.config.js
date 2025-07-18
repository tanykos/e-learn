import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        index: './index.html'
      }
    }
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  css: {
    devSourcemap: true,
  },
  base: "/tanykos/e-learn/"
})
