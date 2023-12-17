<template>
  <div class="exchange-panel -flex -flex-col bg-dark-secondary">
    <h2 class="-text-2xl -text-left">
      Exchange
    </h2>

    <PrimeTabMenu v-model:activeIndex="tabIndex" :model="tabs" />

    <div class="-mt-10">
      <div v-show="tabIndex == 0" class="-flex -flex-col">
        <div class="-flex">
          <PrimeInput v-model="value" type="text" placeholder="Token Address" class="-flex-grow" />

          <PrimeButton label="DXH" class="-ml-4" severity="secondary" />
        </div>

        <PrimeInput v-model="value" type="text" placeholder="Amount" class="-mt-4" style="width: 60%;" />

        <PrimeButton label="Buy" class="-mt-8" severity="secondary" size="large" style="width: 200px" />
      </div>

      <div v-show="tabIndex == 1" class="-flex -flex-col">
        <div class="-flex">
          <PrimeInput v-model="value" type="text" placeholder="Token Address" class="-flex-grow" />

          <PrimeButton label="DXH" class="-ml-4" severity="secondary" />
        </div>
        <PrimeInput v-model="value" type="text" placeholder="Amount" class="-mt-4" style="width: 60%;" />

        <PrimeButton label="Sell" class="-mt-8" severity="secondary" size="large" style="width: 200px" />
      </div>
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
      value: "",
      tabIndex: 0
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