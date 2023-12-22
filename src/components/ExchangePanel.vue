<template>
  <div class="exchange-panel -flex -flex-col bg-dark-secondary">
    <PrimeToast position="top-right" group="fx-toast" />

    <h2 class="-text-3xl -text-left -mt-1">
      Exchange
    </h2>

    <PrimeTabMenu v-model:activeIndex="tabIndex" :model="tabs" />

    <div class="-mt-10">
      <FXForm v-show="tabIndex == 0" :is-buy="true" @submitted="handleBuy" />
      <FXForm v-show="tabIndex == 1" :is-buy="false" @submitted="handleSell" />
    </div>

    <PrimeConfirmDialog group="fx-confirm">
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="-flex -flex-col -align-items-center -p-4 -px-8">
          <span class="-font-bold -text-2xl -block -mb-0 -mt-2">{{ message.header }}</span>

          <p class="-my-0">{{ message.message }}</p>

          <div class="-flex -align-items-center -gap-2 -mt-10">
            <PrimeButton label="Cancel" outlined class="w-8rem" @click="rejectCallback"></PrimeButton>
            <PrimeButton label="Confirm" class="-w-8rem" @click="acceptCallback"></PrimeButton>

          </div>
        </div>
      </template>
    </PrimeConfirmDialog>
  </div>
</template>

<script lang="ts">
import { ExchangeDataModel, Token, hasError } from "@/models";
import { useWalletStore } from "@/stores/wallet";
import { MenuItem } from "primevue/menuitem";
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import underscore from "underscore";
import FXForm from "./FXForm.vue";

export default defineComponent({
  components: {
    FXForm
  },
  setup() {
    const wallet = useWalletStore();
    const toast = useToast();
    const confirm = useConfirm();
    const state = reactive({
      tabs: [
        { label: "Buy" },
        { label: "Sell" }
      ] as MenuItem[],
      tabIndex: 0,
      dxhAddress: computed(() => wallet.dxhAddress),
      tokens: computed(() => wallet.tokens),
      busy: {
        buy: false,
        sell: false
      }
    });

    async function transfer(addr: string, amount: bigint, sym: string | undefined) {
      const ares = await wallet.transferApproved(addr, amount);

      if (typeof ares != "boolean") {
        toast.add({
          severity: "error",
          summary: "Failed to transfer tokens",
          group: "fx-toast",
          detail: ares.message,
          life: 3000
        });

        return;
      }

      if (ares) {
        return;
      }

      return confirm.require({
        group: "fx-confirm",
        header: "Transfer Approval",
        message: `Transfer ${amount} ${sym ?? ""}?`,
        accept: () => postApproval(addr, amount)
      })
    }

    async function postApproval(addr: string, amount: bigint) {
      const err = await wallet.approve(addr, amount);

      if (err) {
        toast.add({
          severity: "error",
          summary: "Failed to transfer tokens",
          group: "fx-toast",
          detail: err.message,
          life: 3000
        });
      }

      return sell(addr, amount);
    }

    function sell(addr: string, amount: bigint) {
      const busy = state.busy;
      busy.sell = true;
      wallet.sellFX(addr, amount)
        .then((err) => {
          if (!err) {
            // state.sellModel = initModel();
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

    function buy(addr: string, amount: bigint) {
      const busy = state.busy;

      if (busy.buy) {
        return;
      }

      busy.buy = true;
      wallet.buyFX(addr, amount)
        .then((err) => {
          if (!err) {
            // state.buyModel = initModel();
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
      handleBuy(model: ExchangeDataModel, amount: bigint) {
        buy(model.address, amount);
      },
      handleSell(model: ExchangeDataModel, amount: bigint, token: Token | undefined) {
        if (state.busy.sell) {
          return;
        }

        const addr = model.address;

        state.busy.sell = true;
        transfer(addr, amount, token?.sym).finally(() => state.busy.sell = false);
      }
    }
  }
})
</script>

<style lang="scss">
@import "src/css/@include-media.scss";

.exchange-panel {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 20px;
}

@include media("<=tablet") {
  .exchange-panel {
    width: 100%;
    padding: 10px;
  }
}
</style>