import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        tsAndCs: "./prize_draw_ts_and_cs.html",
        privacy_policy: "./privacy_policy.html"
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})
