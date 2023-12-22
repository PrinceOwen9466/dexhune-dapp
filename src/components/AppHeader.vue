<template>
  <div class="bg-secondary app-header">
    <PrimeToast position="bottom-right" group="header-toast" />
    <div class="app-header-pattern">
      <div class="-flex -p-1 md:-p-3">
        <h3 class="-text-sm md:-text-3xl -break-normal -w-min -text-left -font-normal -mt-auto -mb-4">
          Peng Protocol's
        </h3>
        <h2 class="-text-2xl -ml-1 lg:-text-8xl -font-medium -mt-auto -mb-4">
          Dexhune
        </h2>



        <div class="-ml-auto -my-auto md:-mb-4">
          <PrimeButton v-if="!isConnected" size="small" label="Connect Wallet" raised @click="connect" />

          <div v-else class="-flex">
            <PrimeInputGroup v-if="_mq.mdPlus">
              <PrimeInputGroupAddon v-if="_mq.mdPlus" @click="handleCopy">
                <i class='bx bxs-wallet'></i>
              </PrimeInputGroupAddon>

              <PrimeInput :model-value="address" size="small" @click="handleCopy" />


              <PrimeButton severity="secondary" :loading="disconnecting" size="small" @click="disconnect">
                <i class='bx bxs-door-open'></i>
              </PrimeButton>
            </PrimeInputGroup>

            <div v-else class="small-wallet">
              <PrimeInput :model-value="address" size="small" aria-haspopup="true" aria-controls="small_menu"
                aria-readonly="true" @click="toggleMenu" />
              <PrimeMenu id="small_menu" ref="smallmenu" :model="menuItems" :popup="true" />
            </div>



          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";
import { EthersStoreUtilState } from "@web3modal/scaffold-utils/ethers";
import { useWalletStore } from "src/stores/wallet";
import { useToast } from "primevue/usetoast";
import {
  Eip1193Provider,
} from "ethers";
import { useMq } from "@/plugins/vue-mq";
import Menu from "primevue/menu";

type Web3Modal = ReturnType<typeof createWeb3Modal>;
interface Web3ModalState {
  open: boolean;
  selectedNetworkId: number | undefined;
}


interface EventsControllerState {
  timestamp: number;
  data: WalletConnectEvent;
}

interface WalletConnectEvent {
  event: "MODAL_LOADED" | "MODAL_OPEN" | "MODAL_CLOSE" | "CONNECT_SUCCESS";
  type: "track" | string;
}

// interface WalletProviderEvent extends Event {
//   target: WalletProviderTarget;
// }

interface WalletProviderTarget {
  providerType: string;
  address: string;
  chainId: number;
  isConnected: boolean;
  provider: Eip1193Provider
}

export default defineComponent({
  setup() {
    const wallet = useWalletStore();
    const toast = useToast();
    const _mq = useMq();



    const state = reactive({
      _mq,
      smallmenu: ref(undefined as undefined | Menu),
      modal: {} as Web3Modal,
      isConnected: computed(() => wallet.connected),
      address: computed(() => wallet.address),
      disconnecting: false,
      menuItems: [
        {
          label: "Actions",
          items: [
            {
              label: "Copy Address",
              icon: "bx bxs-copy",
              command: copy,
            },
            {
              label: "Disconnect",
              icon: "bx bxs-door-open",
              command: disconnect
            }
          ]
        }
      ]
    });

    function init() {
      const config = defaultConfig({
        metadata: {
          name: "Dexhune",
          description: "",
          url: "",
          icons: []
        }
      });

      const modal = state.modal = createWeb3Modal({
        ethersConfig: config,
        chains: [wallet.network],
        projectId: wallet.projectId
      });

      // modal.subscribeState(handleModalChanged);
      // modal.subscribeEvents((ev) => {
      //   console.log("New WC Event", ev);
      // });
      modal.subscribeProvider(handleProviderChanged);
      // modal.subscribeSIWEState((ev) => {
      //   console.log("New SIWE State", ev);
      // });

    }

    // function handleModalEvent(ev: EventsControllerState) {
    //   const event = ev.data.event;
    //   const modal = state.modal;

    //   switch (event) {
    //     case "MODAL_LOADED":
    //       setProvider(modal.getWalletProvider());
    //       break;
    //   }

    //   if (event == "MODAL_LOADED") {
    //     if ()
    //   }
    // }

    // function handleModalChanged(st: Web3ModalState) {
    //   // if (!st.open) {
    //   //   const modal = state.modal;
    //   //   if (modal.getIsConnected() && !wallet.connected) {
    //   //     setProvider(modal.getWalletProvider());
    //   //   }
    //   // }
    // }

    function handleProviderChanged(ev: EthersStoreUtilState) {
      setProvider(ev.provider);
    }

    function setProvider(provider: Eip1193Provider | undefined) {
      console.log("Setting provider: ", provider)

      if (provider) {
        wallet.assignProvider(provider);
        return;
      }



      wallet.connected = false;
      // toast.add({
      //   severity: "error",
      //   summary: "Connection Failed",
      //   detail: "Failed to access your wallet provider, please try again.",
      //   group: "header-toast",
      //   life: 3000
      // });
    }

    onMounted(init);

    // function connectWallet() {
    //   state.modal.open();
    // }

    // function connectWallet() {




    //   // modal.getIsConnected()

    //   modal.subscribeState((x) => {
    //     if (!x.open) {
    //       if (modal.getIsConnected()) {
    //         const provider = modal.getWalletProvider();

    //         if (!provider) {
    //           wallet.connected = false;
    //         }
    //         wallet.assignProvider(provider);

    //         console.log("Provider is: ", provider);
    //       }
    //     }
    //   })
    //   modal.open();

    // modal.subscribeEvents((ev) => ev.)

    function copy() {
      navigator.clipboard.writeText(wallet.address)
        .then(() => {
          toast.add({
            severity: "success",
            summary: "Copied",
            group: "header-toast",
            detail: "Your wallet address has been copied to clipboard",
            life: 3000
          });
        })
    }

    function disconnect() {
      state.modal.open();
      // state.disconnecting = true;
      // state.modal.disconnect().finally(() => state.disconnecting = false);
    }

    return {
      ...toRefs(state),
      disconnect,
      connect() {
        state.modal.open();
      },
      handleCopy() {
        copy();
      },
      toggleMenu(ev: Event) {
        state.smallmenu?.toggle(ev);
      }
    }



  }
});
</script>

<style scoped lang="scss">
@import "src/css/@include-media.scss";

.app-header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(87deg, #950101 76.24%, #3D0000 123.05%);
}

.app-header-pattern {
  background: url("../assets/peng_pattern.png");
  background-position: left -40px top -20px;
}

@media (prefers-color-scheme: dark) {
  .app-header {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(87deg, #950101 76.24%, #3D0000 123.05%);
  }

  .app-header-pattern {
    background: url("../assets/peng_pattern.png");
    background-position: left -40px top -20px;
  }
}

.small-wallet {
  width: 80%;
  margin-left: auto;

  input {
    width: 100%;
  }
}

@include media("<=tablet") {}
</style>
