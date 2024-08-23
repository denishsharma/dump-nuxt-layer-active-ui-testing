import { mergeConfigs } from "@unocss/core"
import { isProduction } from "std-env"
import { transformerCompileClass } from "unocss"
import configs from "./.nuxt/uno.config.mjs"

export default mergeConfigs([
    configs,
    {
        transformers: [
            ...(isProduction ? [transformerCompileClass({ classPrefix: "x-" })] : []),
        ]
    }
])
