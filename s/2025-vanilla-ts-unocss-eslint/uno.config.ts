import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
  ],
  content: {
    pipeline: {
      // include: [/\.(html|ts)($|\?)/],
      include: [/main\.ts$/, /index\.html$/], // Scan only main.ts and index.html
    },
  },
})
