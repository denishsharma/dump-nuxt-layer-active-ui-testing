import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetUseful } from "unocss-preset-useful";

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetAnimations(),
        presetUseful(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
});
