<template>
  <div class="bg-secondary -w-72 -text-left -p-4 price-panel">
    <h3 class="-m-0">
      Price
    </h3>

    <h3 class="-text-black -m-0">

      {{ price.toFixed(0) }} DXH to 1 AVAX
    </h3>

    <div class="-ml-auto -mt-4">
      <!-- <PrimeButton v-tooltip.bottom="'Sample help information'" link icon="pi pi-check">
        
      </PrimeButton> -->
      <PrimeButton label="Query" raised :loading="busy" @click="queryPrice" />
    </div>

  </div>
</template>

<script lang="ts">
import { useWalletStore } from "@/stores/wallet";
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue"

export default defineComponent({
  setup() {
    const wallet = useWalletStore();

    const price = computed(() => wallet.price);
    const state = reactive({
      price,
      busy: false
    });

    function queryPrice() {
      if (state.busy) {
        return;
      }

      state.busy = true;

      wallet.queryPrice().finally(() => {
        state.busy = false;
      })
    }

    onMounted(queryPrice);

    return {
      ...toRefs(state),
      queryPrice
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