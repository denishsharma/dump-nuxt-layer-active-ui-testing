<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
    <div>
      Does updating the layer and pushing changes to the remote repo will update depenedent projects?
    </div>
  </div>
</template>
