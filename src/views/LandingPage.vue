<template>
  <div>
    <AppHeader />

    <div class="bg-secondary -p-2 -mt-6 md:-mt-19 link-panel">
      <a v-tooltip.bottom="'Github'" href="https://github.com/ElixExo/PengProtocol/tree/Dexhune" target="_blank">
        <img src="~/src/assets/github.svg" alt="">
      </a>

      <a v-tooltip.bottom="'White Paper'" href="https://files.catbox.moe/iwn6lg.pdf" target="_blank">
        <img src="~/src/assets/document.svg" alt="">
      </a>

      <a v-tooltip.bottom="'Dexhune Token'" :href="tokenLink" target="_blank">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>

      <a v-tooltip.bottom="'Dexhune PriceDAO'" :href="daoLink" target="_blank">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>

      <a v-tooltip.bottom="'Dexhune Exchange'" :href="fxLink" target="_blank">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>
    </div>

    <div class="-flex -mt-6">
      <PricePanel v-if="isConnected" class="-mx-auto md:-mr-0" />
    </div>

    <div class="-flex -bg-black -p-3 md:-p-4 welcome-panel">
      <img src="~/src/assets/tbltve.png" alt="">
      <div class="-my-auto">
        Dexhune is permissionless orderbook! Turn your volume into liquidity!
      </div>
    </div>

    <ExchangePanel />

    <PrimeCard class="-mt-20 illustration-card" style="background: #000">
      <template #content>
        <div class="illustration -flex -flex-col">
          <img src="~/src/assets/illustrations/mirage-waiting2.png" alt="Coming Soon" class="-mx-auto">

          <h2 class="-mb-0">
            We're working
          </h2>

          <h3 class="-mt-0">
            More panels and features coming soon
          </h3>

          <div class="-flex -mx-auto">
            <PrimeSkeleton width="8rem" height="10rem"></PrimeSkeleton>

            <div class="-ml-2 -mb-auto -flex -flex-col" style="height: 10rem">
              <PrimeSkeleton width="8rem" height="4rem" class="-mt-0" />

              <PrimeSkeleton width="8rem" class="-mt-auto"></PrimeSkeleton>
              <PrimeSkeleton width="8rem" class="-mt-1"></PrimeSkeleton>
              <PrimeSkeleton width="8rem" class="-mt-1"></PrimeSkeleton>
              <PrimeSkeleton width="8rem" class="-mt-1"></PrimeSkeleton>
            </div>

          </div>
        </div>
      </template>

    </PrimeCard>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import AppHeader from "src/components/AppHeader.vue";
import PricePanel from "src/components/PricePanel.vue";
import ExchangePanel from "src/components/ExchangePanel.vue";
import { useWalletStore } from "@/stores/wallet";

export default defineComponent({
  components: { AppHeader, PricePanel, ExchangePanel },
  setup() {
    const wallet = useWalletStore();
    const state = reactive({
      fxLink: wallet.fxLink,
      daoLink: wallet.daoLink,
      tokenLink: wallet.tokenLink,
      isConnected: computed(() => wallet.connected)
    });

    return {
      ...toRefs(state)
    };
  }
})
</script>

<style scoped lang="scss">
@import "src/css/@include-media.scss";

.link-panel {
  display: flex;
  width: min-content;
  padding: 10px;
  background-color: var(--secondary-dark-color);

  a {
    margin-right: 14px;
    height: 32px;
    margin-top: auto;
    margin-bottom: auto;

    &:hover {
      img {
        filter: drop-shadow(0px 0px 7px #fff);
      }
    }

    &:last-of-type {
      // padding-right: 0;
      margin-right: 0;
    }

    // a:nth-last-of-type() {
    //   padding-right: 0;
    // }
  }

  img {
    height: 32px;
  }

  .ava-logo {
    margin-top: 3px;
    height: 28px;
  }
}

.welcome-panel {
  width: 60%;
  margin-top: 40px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-weight: 500;
  text-align: left;

  img {
    width: 150px;
    object-fit: contain;
  }
}

.illustration {
  img {
    width: 300px;
  }
}

@include media ("<=tablet") {
  .welcome-panel {
    width: 80%;
  }
}

@include media("<=phone") {
  .welcome-panel {
    width: 90%;
    font-size: 20px;
    margin-bottom: 40px;

    img {
      width: 100px;
    }
  }
}
</style>