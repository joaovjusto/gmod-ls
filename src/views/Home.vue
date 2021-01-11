<template>
  <div class="home">
    <div class="custom d-flex flex-column align-items-start justify-content-between">
      <div id="server-widget" class="p-5 position-top">
        <span id="server-name" class="d-block">{{ bindServerInfo.serverName }}</span>
        <div class="d-block">
          <span id="server-slots" class="tag">{{ bindApiInfo.slots }} players</span>
          <span id="server-gamemode" class="tag">{{ bindApiInfo.gamemode }}</span>
          <span id="server-map" class="tag">{{ bindApiInfo.map }}</span>
        </div>
      </div>
      <div class="p-5 position-bottom">
        <div id="music-widget" class="tag">
          <div id="music-img">
            <div id="music-img-container">
              <img src="@/assets/music.png" />
            </div>
          </div>
          <div id="music-name">
            <span>Queen - Show Must Go On</span>
          </div>
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
// @ts-ignore
import apiData from '@/assets/demoapidata.json';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      bindApiInfo: apiData,
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

.tag {
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  padding: 1% 2%;
}

#music-widget {
  width: 300px;
  height: 70px;
  padding: 0 5%;
}

#music-img,
#music-name {
  height: 100%;
  display: table;
  float: left;
}

#music-img {
  margin-right: 30px;
}

#music-img #music-img-container,
#music-name span {
  display: table-cell;
  vertical-align: middle;
}

#music-img #music-img-container img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

#music-name span {
  max-width: 170px;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
}

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
</style>
