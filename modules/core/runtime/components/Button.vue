<script lang="ts" setup>
defineProps<{ name?: string }>();
</script>

<template>
    <div class=":uno: bg-red">
        This is a button from modules/core ee
        <slot>
            <template v-if="name">
                {{ name }}
            </template>
        </slot>
    </div>
</template>
