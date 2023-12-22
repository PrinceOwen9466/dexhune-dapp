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
        Dexhune is a permissionless orderbook! Turn your volume into liquidity!
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

          <!-- <div class="-flex -mx-auto">
            <PrimeSkeleton width="8rem" height="10rem"></PrimeSkeleton>

            <div class="-ml-2 -mb-auto -flex -flex-col" style="height: 10rem">
              <PrimeSkeleton width="8rem" height="4rem" class="-mt-0" />

              <PrimeSkeleton width="8rem" class="-mt-auto"></PrimeSkeleton>
              <PrimeSkeleton width="8rem" class="-mt-1"></PrimeSkeleton>
              <PrimeSkeleton width="8rem" class="-mt-1"></PrimeSkeleton>
              <PrimeSkeleton width="8rem" class="-mt-1"></PrimeSkeleton>
            </div>

          </div> -->
        </div>
      </template>

    </PrimeCard>

    <div class="bg-secondary -mx-auto -p-2  link-panel -mt-16">
      <a v-tooltip.top="'Telegram'" href="https://t.me/dexhune/1" target="_blank">
        <img src="~/src/assets/bxl-telegram.svg" alt="">
      </a>

      <a v-tooltip.top="'Reddit'" href="https://www.reddit.com/r/Peng_Protocol/" target="_blank">
        <img src="~/src/assets/bxl-reddit.svg" alt="">
      </a>

      <a v-tooltip.top="'Twitter'" href="https://x.com/Dexhune?t=9AzlsaYxRDlpVsMSHqKhkQ&s=09" target="_blank">
        <img src="~/src/assets/twitter.svg" alt="">
      </a>
    </div>

    <div class="footer-stack -mt-10">
      <div class="-flex -gap-2 -ml-auto -flex-wrap -justify-end">
        <img src="~/src/assets/c-chain.png" alt="Backed on C-Chain">

        <img src="~/src/assets/ipfs.png" alt="Frontend on IPFS">

        <img src="~/src/assets/dappling.png" alt="Deployed via Dappling">
      </div>
    </div>
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
  width: 50%;
  margin-top: 40px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  img {
    width: 100px;
    object-fit: contain;
  }
}

.illustration {
  img {
    width: 250px;
  }
}

.footer-stack {
  display: flex;

  img {
    height: 70px;
  }
}

@include media ("<=tablet") {
  .welcome-panel {
    width: 70%;
  }
}

@include media("<=phone") {
  .welcome-panel {
    width: 90%;
    font-size: 12px;
    margin-bottom: 40px;
    font-weight: 400;

    img {
      width: 70px;
    }
  }

  .footer-stack {

    img {
      height: 45px;
    }
  }
}
</style>