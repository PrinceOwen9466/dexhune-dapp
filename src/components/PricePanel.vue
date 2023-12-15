<template>
  <div class="bg-secondary -w-72 -text-left -p-4 price-panel">
    <h3 class="-m-0">
      Price
    </h3>

    <h3 class="-text-black -m-0">
      {{ price }} DXH to 1 AVAX
    </h3>

    <div class="-ml-auto -mt-auto">
      <PrimeButton v-tooltip.bottom="'Sample help information'" link icon="pi pi-check" label="x" />
      <PrimeButton label="Query" raised />
    </div>

  </div>
</template>

<script lang="ts">
import { useWalletStore } from "@/stores/wallet";
import { computed, defineComponent, reactive, toRefs } from "vue"

export default defineComponent({
  setup() {
    const wallet = useWalletStore();

    const price = computed(() => wallet.price);
    const state = reactive({
      price
    });

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="scss">
.price-panel {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
</style>