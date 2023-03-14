import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      name: `@pi-lib/charts`,
      fileName: `index`,
    },
    outDir: 'vanilla',
    target: 'es2020',
    rollupOptions: {
      external: [
        'd3-array',
        'd3-axis',
        'd3-color',
        'd3-ease',
        'd3-scale',
        'd3-selection',
        'd3-transition',
      ],
    },
  },
})
