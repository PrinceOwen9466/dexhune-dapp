<template>
  <div>
    <AppHeader />

    <div class="bg-secondary -p-2 -mt-10 link-panel">
      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img src="~/src/assets/github.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img src="~/src/assets/document.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>

      <a href="https://github.com/ElixExo/PengProtocol/tree/Dexhune">
        <img class="ava-logo" src="~/src/assets/avalanche-logo.svg" alt="">
      </a>
    </div>

    <div class="-flex">
      <PricePanel class="-ml-auto" />
    </div>

    <div class="-flex -bg-black -p-4 welcome-panel">
      <img src="~/src/assets/tbltve.png" alt="">
      <div class="-my-auto">
        Swap Dx tokens for AVAX and vice versa! List your own pegged tokens relative to gold or any dataset! Dexhune is a
        peer-based distributed exchange that connects buyers and sellers directly using fixed pricing derived from a
        decentralized oracle, liquidity is enhanced by single-sided non-removable liquidity pools
      </div>
    </div>

    <ExchangePanel />

    <PrimeCard class="-mt-20 illustration-card" style="background: #000">
      <template #content>
        <div class="illustration -flex -flex-col">
          <img src="~/src/assets/illustrations/cherry/cherry-coming-soon.png" alt="Coming Soon" class="-mx-auto">

          <h2 class="-mb-0">
            💘 from Dexhune
          </h2>

          <h3 class="-mt-0">
            More panels and features in progress
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
import { defineComponent } from "vue";
import AppHeader from "src/components/AppHeader.vue";
import PricePanel from "src/components/PricePanel.vue";
import ExchangePanel from "src/components/ExchangePanel.vue";

export default defineComponent({
  components: { AppHeader, PricePanel, ExchangePanel },
  setup() {
    return {};
  }
})
</script>

<style scoped lang="scss">
.link-panel {
  display: flex;
  width: min-content;
  padding: 10px;
  background-color: var(--secondary-dark-color);

  a {
    padding-right: 14px;
    height: 32px;
    margin-top: auto;
    margin-bottom: auto;

    &:last-of-type {
      padding-right: 0;
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
  width: 80%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;

  img {
    height: 320px;
  }
}

.illustration {
  img {
    width: 300px;
  }
}
</style>