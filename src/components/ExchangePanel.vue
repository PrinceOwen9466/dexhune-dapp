<template>
  <div class="exchange-panel -flex -flex-col bg-dark-secondary">
    <PrimeToast position="top-right" group="fx-toast" />

    <h2 class="-text-3xl -text-left -mt-1">
      Exchange
    </h2>

    <PrimeTabMenu v-model:activeIndex="tabIndex" :model="tabs" />

    <div class="-mt-10">
      <form v-show="tabIndex == 0" @submit.prevent="submitBuy">
        <div class="-flex -flex-col">
          <div class="-flex">
            <div class="-flex -flex-col -gap-2 -flex-grow">
              <PrimeInput v-model="buyModel.address" type="text" placeholder="Token Address"
                :class="{ 'p-invalid': errors.buy.address }" aria-describedby="buy-address-error" />

              <small v-if="errors.buy.address" id="buy-address-error" class="-text-left">{{ errors.buy.address }}</small>
            </div>

            <div v-show="buyModel.address != dxhAddress">
              <PrimeButton label="DXH" class="-ml-4" severity="secondary" @click="setDefaultAddr(true)" />
            </div>
          </div>

          <div class="-mt-4 -flex -flex-col -gap-2">
            <PrimeInput v-model.number="buyModel.amount" type="text" placeholder="Amount" style="width: 60%;"
              :class="{ 'p-invalid': errors.buy.amount }" aria-describedby="buy-address-amount" />

            <small v-if="errors.buy.amount" id="buy-address-amount" class="-text-left">{{ errors.buy.amount }}</small>
          </div>

          <PrimeButton label="Buy" class="-mt-8" severity="secondary" size="large" style="width: 200px"
            :loading="busy.buy" type="submit" />
        </div>
      </form>

      <form v-show="tabIndex == 1" @submit.prevent="submitSell">
        <div class="-flex -flex-col">
          <div class="-flex">
            <div class="-flex -flex-col -gap-2 -flex-grow">
              <PrimeInput v-model="sellModel.address" type="text" placeholder="Token Address"
                :class="{ 'p-invalid': errors.sell.address }" aria-describedby="sell-address-error" />

              <small v-if="errors.sell.address" id="sell-address-error" class="-text-left">{{ errors.sell.address
              }}</small>
            </div>

            <div v-show="sellModel.address != dxhAddress">
              <PrimeButton label="DXH" class="-ml-4" severity="secondary" @click="setDefaultAddr(false)" />
            </div>

          </div>
          <!-- <PrimeInput v-model="sellModel.amount" type="text" placeholder="Amount" class="-mt-4" style="width: 60%;"
            :class="{ 'p-invalid': errors.buy.amount }" /> -->

          <div class="-mt-4 -flex -flex-col -gap-2">
            <PrimeInput v-model.number="sellModel.amount" type="text" placeholder="Amount" style="width: 60%;"
              :class="{ 'p-invalid': errors.sell.amount }" aria-describedby="sell-address-amount" />

            <small v-if="errors.sell.amount" id="sell-address-amount" class="-text-left">{{ errors.sell.amount }}</small>
          </div>

          <PrimeButton label="Sell" class="-mt-8" severity="secondary" size="large" style="width: 200px"
            :loading="busy.sell" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ErrorMap, ExchangeDataModel, hasError } from "@/models";
import { useWalletStore } from "@/stores/wallet";
import { isAddress } from "ethers/address";
import { MenuItem } from "primevue/menuitem";
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import { useToast } from "primevue/usetoast";

export default defineComponent({
  setup() {
    const initModel = () => {
      return {
        amount: 0
      } as ExchangeDataModel;
    };

    const wallet = useWalletStore();
    const toast = useToast();
    const state = reactive({
      tabs: [
        { label: "Buy" },
        { label: "Sell" }
      ] as MenuItem[],
      tabIndex: 0,
      dxhAddress: computed(() => wallet.dxhAddress),

      buyModel: initModel(),
      sellModel: initModel(),
      errors: {
        buy: {} as ErrorMap<ExchangeDataModel>,
        sell: {} as ErrorMap<ExchangeDataModel>
      },
      busy: {
        buy: false,
        sell: false
      }
    });

    watch(() => state.buyModel, _ => {
      state.errors.buy = {} as ErrorMap<ExchangeDataModel>
    }, { deep: true });

    watch(() => state.sellModel, _ => {
      state.errors.sell = {} as ErrorMap<ExchangeDataModel>
    }, { deep: true });

    function sell() {
      const busy = state.busy;

      if (busy.sell) {
        return;
      }

      busy.sell = true;
      wallet.sellFX(state.sellModel)
        .then((err) => {
          if (!err) {
            state.sellModel = initModel();
          } else {
            toast.add({
              severity: "error",
              summary: "Failed to create sell order",
              group: "fx-toast",
              detail: err.message,
              life: 3000
            });
          }
        }).finally(() => busy.sell = false)
    }

    function buy() {
      const busy = state.busy;

      if (busy.buy) {
        return;
      }

      busy.buy = true;
      wallet.buyFX(state.buyModel)
        .then((err) => {
          if (!err) {
            state.buyModel = initModel();
          } else {
            toast.add({
              severity: "error",
              summary: "Failed to create buy order",
              group: "fx-toast",
              detail: err.message,
              life: 3000
            });
          }
        }).finally(() => busy.buy = false)
    }

    return {
      ...toRefs(state),
      setDefaultAddr(isBuy = true) {
        if (isBuy) {
          state.buyModel.address = state.dxhAddress;
        } else {
          state.sellModel.address = state.dxhAddress;
        }
      },
      submitBuy() {
        const model = state.buyModel;
        const errors = state.errors.buy;

        if (!isAddress(model.address)) {
          errors.address = "Please provide a valid token address";
        }

        if (model.amount <= 0) {
          errors.amount = "Please enter a valid amount";
        }

        if (hasError(errors)) return;

        buy();
      },

      submitSell() {
        const model = state.sellModel;
        const errors = state.errors.sell;

        if (!isAddress(model.address)) {
          errors.address = "Please provide a valid token address";
        }

        if (model.amount <= 0) {
          errors.amount = "Please enter a valid amount";
        }

        if (hasError(errors)) return;

        sell();
      }
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