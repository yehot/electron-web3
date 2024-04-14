import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer/src'),
        // '@renderer': resolve('src/renderer/src'),
        '@bridge': resolve('src/renderer/bridge'),
        '@web3': resolve('src/main/web3')
      }
    },
    plugins: [vue(), WindiCSS()]
  }
})
