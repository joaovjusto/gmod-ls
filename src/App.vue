<template>
  <div style="height: 100%;">
    <Carrousel
      :imagesUrlList="bindServerInfo.imagesUrlList"
      :cycleTime="10"
      :transitionDuration="1"
      transitionType="ease-in"
    />
    <BackgroundGradient
      :colorStart="primaryColor"
      colorEnd="#000"
      :opacityStart="0.8"
      :opacityEnd="0"
      :ratio="0.2"
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
import config from '@/assets/config.json';
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
      primaryColor: serverInfo.primaryColor,
    };
  },
  mounted() {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', this.primaryColor);
    root.style.setProperty('--body-padding', config.bodyPadding);
  },
});
</script>
<style lang="scss" scoped></style>
