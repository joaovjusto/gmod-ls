<template>
  <div id="server-widget">
    <div class="d-block">
      <span id="server-name" class="d-block">{{ details.servername }}</span>
    </div>
    <div class="d-block">
      <span id="server-slots" class="tag">{{ details.maxplayers }} players</span>
      <span id="server-gamemode" class="tag">{{ details.gamemode }}</span>
      <span id="server-map" class="tag">{{ details.mapname }}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';

const Component = Vue.extend({
  name: 'ServerStats',
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
#server-widget span {
  text-transform: uppercase;
}

#server-widget .tag {
  padding: 4px 15px !important;
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
