import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import packageObj from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      components: path.resolve('src/components'),
      hooks: path.resolve('src/hooks'),
      schema: path.resolve('src/schema'),
      data: path.resolve('src/data')
    }
  },
  define: {
    "process.env.APP_VERSION": JSON.stringify(packageObj.version)
  }
})
