import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { viteMockServe } from 'vite-plugin-mock'
import compressionPlugin from 'vite-plugin-compression'
import PkgConfig from 'vite-plugin-package-config'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import path from 'path'

export default defineConfig({
  server: {
    port: 8085,
    open: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
      service: path.resolve(__dirname, 'src/service'),
      store: path.resolve(__dirname, 'src/store'),
    },
  },
  build: {
    chunkSizeWarningLimit: 10240,
    brotliSize: false,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunk/[name]-[hash].js',
        entryFileNames: 'assets/chunk/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          'chunk-vendor': ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom'],
          'chunk-echarts': ['echarts'],
          'chunk-react-photo-view': ['react-photo-view'],
          'chunk-brafteditor': ['braft-editor'],
        },
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    PkgConfig(),
    OptimizationPersist(),
    compressionPlugin({ threshold: 10240 }),
    viteMockServe({ watchFiles: true }),
  ],
})
