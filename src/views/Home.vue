<template>
  <div class="home">
    <div class="custom d-flex flex-column align-items-start justify-content-between">
      <div class="p-5 position-top">
        <ServerStats :details="details" />
      </div>
      <div class="p-5 position-bottom">
        <EmbedMusic :musicsUrlList="bindServerData.musicsUrlList" :volume="details.volume" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';
import { EmbedMusic, ServerStats } from '@/components';
// @ts-ignore
import serverData from '@/assets/serverInfo.json';

export default Vue.extend({
  name: 'Home',
  components: {
    EmbedMusic,
    ServerStats,
  },
  data() {
    return {
      bindServerData: serverData,
      details: {
        servername: "Garry's Mod",
        maxplayers: '16',
        gamemode: 'sandbox',
        mapname: 'gm_murder',
      },
      detailsIntervalId: 0,
    };
  },
  methods: {
    getDetails() {
      let intervalLoopCount = 0;

      this.detailsIntervalId = window.setInterval(() => {
        const detailsText = document.getElementById('gamedetails').innerText;

        if (intervalLoopCount >= 10) {
          window.clearInterval(this.detailsIntervalId);
        } else if (detailsText !== '') {
          this.details = JSON.parse(detailsText);
          window.clearInterval(this.detailsIntervalId);
        }

        intervalLoopCount++;
      }, 200);
    },
  },
  mounted() {
    this.getDetails();
  },
});
</script>

<style lang="scss" scoped>
.position-top {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.position-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
