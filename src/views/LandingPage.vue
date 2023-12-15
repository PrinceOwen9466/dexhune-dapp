<template>
  <div>
    <AppHeader />

    <div class="bg-secondary -p-2 -mt-10 link-panel">
      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img src="~/src/assets/github.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img src="~/src/assets/document.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "src/components/AppHeader.vue";

export default defineComponent({
  components: { AppHeader },
  setup() {
    return {};
  }
})
</script>

<style scoped lang="scss">
.link-panel {
  display: flex;
  width: min-content;
  padding: 10px;
  background-color: var(--secondary-dark-color);

  a {
    padding-right: 10px;
    height: 32px;
  }

  img {
    height: 32px;
  }

  .ava-logo {
    height: 28px;
  }
}
</style>