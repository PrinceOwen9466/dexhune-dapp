<template>
  <form class="fx-form" @submit.prevent="handleSubmit">
    <div class="-flex -flex-col">
      <div class="-flex">
        <div class="-flex -flex-col -gap-2 -flex-grow">
          <PrimeDropdown v-model="model.address" :focused-option-index="1" editable :options="tokens" option-label="addr"
            :class="{ 'p-invalid': errors.address }" :aria-describedby="addrErrorId" option-value="addr"
            placeholder="Token Address" class="w-full md:w-14rem">
            <template #option="p">
              <div class="-flex -flex-col">
                <div>
                  {{ p.option.name }} {{ p.option.sym }}
                </div>

                <div>
                  {{ p.option.addr }}
                </div>
              </div>
            </template>
          </PrimeDropdown>

          <small v-if="errors.address" :id="addrErrorId" class="-text-left">{{ errors.address }}</small>

          <div v-if="token.addr" class="-font-semibold -text-right">
            {{ token.name }} - {{ token.sym }}
          </div>
        </div>
      </div>

      <div class="-mt-4 -flex -flex-col fx-amt-panel">
        <div class="-flex -flex-col -gap-2 ">
          <PrimeInput v-model.number="model.amount" type="text" placeholder="Amount"
            :class="{ 'p-invalid': errors.amount }" :aria-describedby="amountErrorId" />

          <small v-if="errors.amount" :id="amountErrorId" class="-text-left">{{ errors.amount }}</small>
        </div>

        <div v-if="isBuy || token.addr" class="-ml-2 -my-auto -font-semibold -opacity-70 -text-right ">
          <PrimeProgressSpinner v-if="normalizing" style="width: 20px; height: 20px; margin-bottom: -5px" stroke-width="4"
            animation-duration=".5s" />
          {{ nAmount }} <span v-if="!isBuy">{{ token.sym }}</span><span v-else>{{ nativeTk }}</span>
        </div>

        <div v-if="isBuy" class="-ml-2 -my-auto -font-bold -opacity-90 -text-right ">
          {{ price }} {{ token.sym }}
        </div>

        <div v-else class="-ml-2 -my-auto -font-bold -opacity-90 -text-right ">
          {{ price }} {{ nativeTk }}
        </div>
      </div>

      <div class="-flex -mt-8">
        <PrimeButton label="Clear Orders" class=" -ml-auto" style="width: 150px" :loading="clearing"
          @click="clearOrders" />

        <PrimeButton :label="isBuy ? 'Buy' : 'Sell'" class="-ml-2" severity="secondary" style="width: 150px"
          :loading="busy || normalizing" type="submit" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { ErrorMap, ExchangeDataModel, Token, hasError } from "@/models";
import { useWalletStore } from "@/stores/wallet";
import { isAddress } from "ethers";
import { useToast } from "primevue/usetoast";
import underscore from "underscore";
import { take } from "underscore";
import { computed, defineComponent, reactive, toRefs, watch } from "vue";

export default defineComponent({
  props: {
    isBuy: {
      default: true,
      type: Boolean
    },
    busy: Boolean
  },
  emits: ["submitted"],
  setup(props, { emit }) {
    const noerrors = () => {
      return {} as ErrorMap<ExchangeDataModel>
    };
    const initModel = () => {
      return {
        amount: 0
      } as ExchangeDataModel;
    };

    const toast = useToast();
    const wallet = useWalletStore();

    const state = reactive({
      token: "" as unknown as Token,
      tokens: computed(() => wallet.tokens),
      nativeTk: computed(() => wallet.nativeTk),
      model: initModel(),
      errors: noerrors(),
      nAmount: BigInt(0),
      normalizing: false,
      clearing: false,

      addrErrorId: computed(() => `${props.isBuy ? "buy" : "sell"}-address-error`),
      amountErrorId: computed(() => `${props.isBuy ? "buy" : "sell"}-amount-error`),
    });

    const _state = reactive({
      price: computed(() => {
        const tk = state.token;
        const amount = state.model.amount;
        let price = 0;

        if (tk.scheme == 1) {
          price = tk.price;
        } else {
          price = wallet.price / tk.price;
        }

        console.log("Price is", price);
        console.log("Wallet price", wallet.price, "tk price", tk.price);

        let res: number;

        if (props.isBuy) {
          res = price * amount;
        } else {
          res = (amount / price);
        }

        if (Number.isNaN(res)) {
          res = 0;
        }

        return res;
      })
    });

    function clearOrders() {
      if (state.clearing) {
        return;
      }

      state.clearing = true;

      wallet.clearOrders()
        .then((err) => {
          if (err) {
            toast.add({
              severity: "error",
              summary: "Failed to clear orders",
              group: "fx-toast",
              detail: err.message,
              life: 3000
            });
          }
        })
        .finally(() => state.clearing = false);
    }


    function findToken(addr: string) {
      if (!isAddress(addr)) {
        return;
      }

      const tokens = wallet.tokens;

      const n = tokens.findIndex(x => x.addr == addr);
      let tk: Token;

      if (n >= 0) {
        tk = tokens[n];
      } else {
        tk = {} as Token;
      }

      state.token = tk;
    }

    function normalize() {
      const addr = state.model.address;
      const amount = state.model.amount;

      if (props.isBuy) {
        state.nAmount = wallet.normalizeNative(amount);
        state.normalizing = false;
        return;
      }

      if (!isAddress(addr)) {
        return;
      }

      wallet.normalizeAmount(addr, amount)
        .then((res) => {
          state.nAmount = res;
        }).finally(() => state.normalizing = false);
    }

    function startNormalize() {
      state.normalizing = true;
      lazyNormalize();
    }



    const lazyFindToken = underscore.debounce(findToken, 1000, false);
    const lazyNormalize = underscore.debounce(normalize, 1500, false);


    watch(() => state.model, () => {
      state.errors = noerrors();
      startNormalize();
    }, { deep: true });

    watch(() => state.model.address, lazyFindToken);

    return {
      ...toRefs(state),
      ...toRefs(_state),
      clearOrders,
      handleSubmit() {
        const model = state.model;
        const errors = state.errors;

        if (!isAddress(model.address)) {
          errors.address = "Please provide a valid token address";
        }

        if (model.amount <= 0) {
          errors.amount = "Please enter a valid amount";
        }

        if (hasError(errors)) return;

        emit("submitted", model, state.nAmount, state.token);
      }
    }
  }
})
</script>
