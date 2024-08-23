import { dirname, join } from "path"
import { fileURLToPath } from "url"

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [join(currentDir, "./assets/styles/main.scss")],
  hooks: {
    "components:dirs": (dirs) => {
      dirs.push({
        path: join(currentDir, "./composers"),
        extensions: [".composer.vue"],
        pattern: "**/*.composer.vue",
        prefix: "ActiveLayer",
      })
    }
  },
  modules: ["@unocss/nuxt"],
  unocss: {
    nuxtLayers: true,
  }
})
