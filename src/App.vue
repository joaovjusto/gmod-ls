<template>
  <div style="height: 100%;">
    <Carrousel
      :imagesUrlList="bindServerInfo.imagesUrlList"
      :cycleTime="3"
      :transitionDuration="1"
      transitionType="ease-in"
    />
    <BackgroundGradient
      colorStart="#114D64"
      colorEnd="#000"
      opacityStart="1"
      opacityEnd="0"
      ratio="0.2"
    />
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';
// @ts-ignore
import serverInfo from '@/assets/serverInfo.json';

import { BackgroundGradient, Carrousel } from '@/components';

export default Vue.extend({
  name: 'App',
  components: {
    BackgroundGradient,
    Carrousel,
  },
  data() {
    return {
      bindServerInfo: serverInfo,
    };
  },
  mounted() {
    const localServerInfo = serverInfo;
    const root = document.documentElement;
    root.style.setProperty('--primary-color', localServerInfo.primaryColor);
  },
});
</script>
<style lang="scss" scoped></style>
