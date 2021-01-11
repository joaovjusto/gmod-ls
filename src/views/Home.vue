<template>
  <div class="home">
    <div class="custom d-flex flex-column align-items-start justify-content-between">
      <div class="p-5 position-top">
        <div class="d-block">
          <span class="server-slots">QTD JOGADORES 5</span>
          <span class="server-gamemode ml-3">GAMEMODE</span>
        </div>
        <span class="server-name d-block">{{bindServerInfo.serverName}}</span>
        <span class="server-map">MAPA FODASTICO API</span>
      </div>
      <div class="p-5 position-bottom">
        <div class="music-wrap d-inline-block">
          <img src="@/assets/logo.jpg" height="50px" width="50px" class="float-left" alt=""/>
          <span class="float-right absolute">TITULO GOSTOSO</span>
          <span class="float-right opacity-0">TITULO GOSTOSO</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';
// @ts-ignore
import serverInfo from '@/assets/serverInfo.json';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      bindServerInfo: serverInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
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

.music-wrap {
  position: relative;
}

.music-wrap span.absolute  {
  position: absolute;
  top: 50%;
  left: 60px;
  margin-top: -10px;
  font-size: 16px;
}

.music-wrap img {
  border-radius: 100%;
}

.opacity-0 {
  opacity: 0;
  padding-left: 15px;
}

server-info span {
  text-transform: uppercase;
}

.server-slots, .server-name {
  color: #FFF;
}

.server-slots {
  font-size: 21px;
}

.server-gamemode {
  font-size: 16px;
}

.server-name {
  font-size: 32px;
}

.server-map {
  font-size: 14px;
}

</style>
