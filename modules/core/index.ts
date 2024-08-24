import { addComponent, addComponentsDir, createResolver, defineNuxtModule, useLogger } from "nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: "core-layer-module",
        version: "0.0.1",
    },
    setup: async () => {
        const logger = useLogger("core-layer-module");
        const { resolve } = createResolver(import.meta.url);

        logger.info("core-layer-module setup");

        const runtimeDir = resolve("./runtime");

        await addComponentsDir({
            path: resolve(runtimeDir, "components"),
            extensions: ["vue"],
            prefix: "ActiveLayer",
        });

        await addComponent({
            filePath: resolve("../../composers/test.composer.vue"),
            name: "TestComposerRegisteredFromModule",
        });
    },
});
