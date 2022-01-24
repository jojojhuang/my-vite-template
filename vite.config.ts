/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: [
            (node) => {
              if (process.env.NODE_ENV === 'production') {
                if (node.type === 1 /*NodeTypes.ELEMENT*/) {
                  for (let i = 0; i < node.props.length; i++) {
                    const p = node.props[i]
                    if (p && p.type === 6 /*NodeTypes.ATTRIBUTE*/ && p.name === 'data-test') {
                      node.props.splice(i, 1)
                      i--
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }),
    windicss()
  ],
  build: {
    minify: true
  },
  test: {
    global: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
