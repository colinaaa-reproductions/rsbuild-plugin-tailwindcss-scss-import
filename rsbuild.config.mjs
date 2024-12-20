import {defineConfig} from '@rsbuild/core';
import {pluginSass} from '@rsbuild/plugin-sass'
import {pluginTailwindCSS} from 'rsbuild-plugin-tailwindcss'

export default defineConfig({
  plugins: [
    pluginSass(),
    pluginTailwindCSS(),
  ],
  tools: {
    lightningcssLoader: false,
  },
})
