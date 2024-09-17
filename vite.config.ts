import {resolve} from 'node:path'
import {defineConfig} from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  server: {
    host: true, // 自動的に利用可能なホストを使用
    port: 5173, // デフォルトのポート番号（必要に応じて変更可能）
  },
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
        inputSwitch: resolve(root, 'input-switch', 'index.html'),
      },
    },
  },
})