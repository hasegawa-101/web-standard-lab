import {resolve} from 'node:path'
import {defineConfig} from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  base: '/web-standard-lab/',
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        popoverApi: resolve(root, 'popover-api', 'index.html'),
        colorMixGlobalToken: resolve(root, 'color-mix-global-token', 'index.html'),
        roundWrapper: resolve(root, 'round-wrapper', 'index.html'),
      },
    },
  },
})