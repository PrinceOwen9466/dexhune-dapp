<template>
  <div class="exchange-panel -flex -flex-col bg-dark-secondary">
    <h2 class="-text-2xl">
      Exchange
    </h2>

    <PrimeTabMenu :model="tabs" />

    <div class="-mt-10 -flex -flex-col">
      <PrimeInput v-model="value" type="text" placeholder="Token Address" />
      <PrimeInput v-model="value" type="text" placeholder="Amount" class="-mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { MenuItem } from "primevue/menuitem";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      tabs: [
        { label: "Buy" },
        { label: "Sell" }
      ] as MenuItem[],
      value: ""
    });



    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
.exchange-panel {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 20px;
}
</style>