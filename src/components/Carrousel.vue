<template>
  <div class="bg-carrousel">
    <div class="bg-current" :style="bgCurrent.style" />
    <div class="bg-incoming" :style="bgIncoming.style" />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';

const Component = Vue.extend({
  name: 'Carrousel',
  props: {
    cycleTime: {
      type: Number,
      default: 10,
    },
    imagesUrlList: {
      type: Array,
      default: () => [],
      required: true,
    },
    transitionDuration: {
      type: Number,
      default: 1,
    },
    transitionType: {
      type: String,
      validator: function(value) {
        return ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'].indexOf(value) !== -1;
      },
      default: 'ease',
    },
  },
  data() {
    return {
      bgAnimationTime: 1000,
      bgCurrent: {
        style: '',
      },
      bgIncoming: {
        style: '',
      },
      index: 0,
      indexMax: this.$props.imagesUrlList.length,
      intervalId: -1,
    };
  },
  methods: {
    cycleBackground() {
      this.nextIndex();

      this.bgIncoming.style = this.generateStyleBackgroundUrl(
        this.$props.imagesUrlList[this.index],
      );
      this.bgCurrent.style += this.generateStyleHide();

      setTimeout(() => {
        this.bgCurrent.style = this.bgIncoming.style;
      }, this.$props.transitionDuration * 1000 + 500);
    },
    initBackground() {
      if (this.indexMax > 0) {
        this.index = 0;

        this.bgCurrent.style = this.generateStyleBackgroundUrl(
          this.$props.imagesUrlList[this.index],
        );

        this.bgIncoming.style = '';
      }
    },
    generateStyleBackgroundUrl(url: string) {
      return `background: url(${url});`;
    },
    generateStyleHide() {
      return `
       transition: ${this.$props.transitionType} ${this.$props.transitionDuration}s; opacity: 0`;
    },
    nextIndex() {
      this.index = this.index + 1 >= this.indexMax ? 0 : this.index + 1;
    },
  },
  mounted() {
    this.$props.transitionDuration = this.$props.transitionDuration >= this.$props.cycleTime
      ? this.$props.cycleTime * 0.8 : this.$props.transitionDuration;

    this.initBackground();

    if (this.indexMax > 1) {
      this.intervalId = window.setInterval(this.cycleBackground, this.$props.cycleTime * 1000);
    }
  },
  beforeDestroy() {
    window.clearInterval(this.intervalId);
  },
});

export default Component;
</script>

<style scoped>
.bg-carrousel,
.bg-carrousel .bg-current,
.bg-carrousel .bg-incoming {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
.bg-carrousel .bg-current,
.bg-carrousel .bg-incoming {
  background-size: cover !important;
}
.bg-carrousel .bg-current {
  z-index: 2;
}
.bg-carrousel .bg-incoming {
  z-index: 1;
}
</style>
