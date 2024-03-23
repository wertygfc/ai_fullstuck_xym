import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// ts->js->es5    ts-loader -> babel -> es5
import AutoImport from 'unplugin-suto-import/vite'
import Component from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolves'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src'),
      views: path.resolve(__dirname, 'src/views'),
      interface: path.resolve(__dirname, 'src/interface')
    }
  }
})
