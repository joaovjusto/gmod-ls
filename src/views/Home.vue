<template>
  <div class="home">
    <div class="custom d-flex flex-column align-items-start justify-content-between">
      <div id="server-widget" class="p-5 position-top">
        <span id="server-name" class="d-block">{{ bindServerData.name }}</span>
        <div class="d-block">
          <span id="server-slots" class="tag">{{ bindServerData.slots }} players</span>
          <span id="server-gamemode" class="tag">{{ bindServerData.gamemode }}</span>
          <span id="server-map" class="tag">{{ bindServerData.map }}</span>
        </div>
      </div>
      <div class="p-5 position-bottom">
        <EmbedMusic :musicsUrlList="bindServerData.musicsUrlList" :apiKey="bindServerData.apiKey" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';
import { EmbedMusic } from '@/components';
// @ts-ignore
import serverData from '@/assets/serverInfo.json';
// @ts-ignore
import apiData from '@/assets/demoapidata.json';

export default Vue.extend({
  name: 'Home',
  components: {
    EmbedMusic,
  },
  data() {
    return {
      bindServerData: serverData,
      bindServerInfo: apiData,
    };
  },
  methods: {
    GameDetails(
      servername: any,
      serverurl: any,
      mapname: any,
      maxplayers: any,
      steamid: any,
      gamemode: any,
      volume: any,
      language: any,
    ) {
      this.bindServerData = {
        gamemode,
        map: mapname,
        name: servername,
        slots: maxplayers,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
#server-widget span {
  text-transform: uppercase;
}

#server-name {
  color: #fff;
  font-size: 48px;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.9);
  margin-bottom: 2%;
}

#server-slots,
#server-gamemode,
#server-map {
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 400;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-right: 3%;
}
.position-top {
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
