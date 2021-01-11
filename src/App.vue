<template>
<div style="height: 100%;">
  <div id="bg-carrousel"></div>
  <div id="bg-gradient"></div>
  <div id="app">
    <router-view/>
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
      carrouselIntervalId: 0,
    };
  },
  mounted() {
    const localServerInfo: any = serverInfo;
    const root = document.documentElement;
    root.style.setProperty('--primary-color', localServerInfo.primaryColor);
    let index: any = 0;
    this.carrouselIntervalId = window.setInterval(() => {
      const carrousel: any = document.getElementById('bg-carrousel');

      carrousel.style.background = `
        url("https://picsum.photos/1024/480/?image=${index}")`;
      carrousel.style.backgroundSize = 'cover';

      index += 1;
    }, 5000);
  },
});
</script>
<style lang="scss" scoped>
  .carousel {
    height: 100%;
    .carousel-inner {
      height: 100%;
      .carousel-item {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
</style>
