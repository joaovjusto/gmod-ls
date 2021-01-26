<template>
  <div id="server-stats">
    <div id="primary" class="d-block">
      <span id="name" class="d-block">{{ details.servername }}</span>
      <BackgroundGradient
        colorStart="rgba(255, 255, 255, 0.1)"
        colorEnd="#000"
        :opacityStart="0.2"
        :opacityEnd="0"
        :ratio="0.2"
      />
    </div>
    <div id="secundary" class="d-block">
      <span id="slots" class="tag">{{ details.maxplayers }} players</span>
      <span id="gamemode" class="tag">{{ details.gamemode }}</span>
      <span id="map" class="tag">{{ details.mapname }}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';

// eslint-disable-next-line import/no-cycle
import { BackgroundGradient } from '@/components';

const Component = Vue.extend({
  name: 'ServerStats',
  components: {
    BackgroundGradient,
  },
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
});

export default Component;
</script>

<style scoped>
#server-stats #primary {
  position: relative;
}

#server-stats .bg-gradient {
  margin-left: calc(var(--body-padding) * -1) !important;
  z-index: -1 !important;
}
</style>
