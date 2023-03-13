import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      name: `@pi-lib/charts`,
      fileName: `pi-lib-charts`,
    },
  },
})
