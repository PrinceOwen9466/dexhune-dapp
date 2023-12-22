<template>
  <div ref="root" class="app-root">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import "src/css/@include-media.scss";

.app-root {
  padding: 2rem;
}

@include media("<=tablet") {
  .app-root {
    padding: 1rem;
  }
}

@include media("<=phone") {
  .app-root {
    padding: .5rem;
  }
}
</style>
