<template>
  <div style="height: 100%;">
    <Carrousel
      :imagesUrlList="bindServerInfo.imagesUrlList"
      cycleTime="3"
      transitionDuration="1"
      transitionType="ease-in"
    />
    <div id="bg-gradient"></div>
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

import { Carrousel } from '@/components';

export default Vue.extend({
  name: 'App',
  components: {
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
