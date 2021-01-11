<template>
  <div style="height: 100%;">
    /** * TODO: Desenvolver Carrousel */
    <div id="bg-carrousel"></div>
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

export default Vue.extend({
  name: 'App',
  data() {
    return {
      bindServerInfo: serverInfo,
    };
  },
  mounted() {
    const localServerInfo: any = serverInfo;
    const root = document.documentElement;
    root.style.setProperty('--primary-color', localServerInfo.primaryColor);

    const carrousel: any = document.getElementById('bg-carrousel');
    carrousel.style.background = `
    url(https://image.winudf.com/v2/image/Y29tLmdsYWRpYW5ldC5hbmltZXdhbGxwYXBlcnYxX3NjcmVlbl8wX2V5ZnU3cHdo/screen-0.jpg?fakeurl=1&type=.jpg)`;
    carrousel.style.backgroundSize = 'cover';
  },
});
</script>
<style lang="scss" scoped></style>
