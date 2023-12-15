<template>
  <div class="bg-secondary app-header">
    <div class="app-header-pattern">
      <div class="-flex -p-3">
        <h3 class="-text-3xl -break-normal -w-min -text-left -font-normal -mt-auto -mb-4">
          Peng Protocol's
        </h3>
        <h2 class="-text-8xl -font-medium -mt-auto -mb-4 -ml-2">
          Dexhune
        </h2>

        <PrimeButton label="Connect Wallet" class="-ml-auto -mt-auto -mb-4" raised @click="connectWallet" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";
import { useWalletStore } from "src/stores/wallet";
// import { defaultConfig } from "@web3modal/ethers";

export default defineComponent({
  setup() {
    const wallet = useWalletStore();

    function connectWallet() {
      const config = defaultConfig({
        metadata: {
          name: "Dexhune",
          description: "",
          url: "",
          icons: []
        }
      });

      const modal = createWeb3Modal({
        ethersConfig: config,
        chains: [wallet.network],
        projectId: wallet.projectId
      });

      modal.open().then(() => {
        //
      });
    }

    return {
      connectWallet
    }
  }
});
</script>

<style scoped lang="scss">
// background: url(<path-to-image>), lightgray 0% 0% / 80.74866533279419px 80.74866533279419px repeat, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(87deg, #950101 76.24%, #3D0000 123.05%);
.app-header {
  // background: linear-gradient(87deg, #950101 76.24%, #3D0000 123.05%);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(87deg, #950101 76.24%, #3D0000 123.05%);
  // background-image: ;
}

.app-header-pattern {
  background: url("../assets/peng_pattern.png");
  background-position: left -40px top -20px;
}
</style>
