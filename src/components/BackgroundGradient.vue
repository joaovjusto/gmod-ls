<template>
  <div id="bg-gradient">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" :style="styleStart" />
          <stop :offset="offsetStart" :style="styleStart" />
          <stop offset="100%" :style="styleEnd" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#lgrad)" />
    </svg>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';

const Component = Vue.extend({
  name: 'BackgroundGradient',
  props: {
    colorStart: {
      type: String,
      required: true,
    },
    colorEnd: {
      type: String,
      required: true,
    },
    opacityEnd: {
      type: Number,
      default: 1,
      required: false,
    },
    opacityStart: {
      type: Number,
      default: 1,
      required: false,
    },
    ratio: {
      type: Number,
      default: 0.5,
      required: false,
      validator: val => val >= 0 && val <= 1,
    },
  },
  data() {
    return {
      offsetStart: '',
      styleEnd: '',
      styleStart: '',
    };
  },
  methods: {
    initData() {
      this.offsetStart = `${this.$props.ratio * 100}%`;
      this.styleEnd = `stop-color:${this.$props.colorEnd};stop-opacity:${this.$props.opacityEnd}`;
      this.styleStart = `stop-color:${this.$props.colorStart};stop-opacity:${this.$props.opacityStart}`;
    },
  },
  beforeMount() {
    this.initData();
  },
});

export default Component;
</script>

<style scoped>
#bg-gradient {
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
#bg-gradient svg {
  width: 100%;
  height: 100%;
}
</style>
