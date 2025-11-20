import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInject from 'vite-plugin-css-injected-by-js'
import autoprefixer from 'autoprefixer'

interface Manifest {
  dependencies?: Record<string, string>,
  peerDependencies?: Record<string, string>,
  version?: string
}

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8')) as Manifest

const externalPkgs = ['@vue'].concat(
  Object.keys(pkg.dependencies || {}),
  Object.keys(pkg.peerDependencies || {}),
)
const external = (id: string) => externalPkgs.some(p => p === id || id.startsWith(`${p}/`))

export default defineConfig({
  esbuild: {
    drop: ['debugger'],
    pure: ['console.log'],
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    outDir: 'es',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GridLayoutPlus',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external,
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    commonjsOptions: {
      sourceMap: false,
    },
  },
  plugins: [vue(), cssInject()],
})
