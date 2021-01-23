<template>
  <div id="embed-music" class="tag">
    <div id="player-wrap">
      <audio id="player" :src="music.url" autoplay allow="autoplay" />
    </div>
    <div id="summary-wrap" class="animation-ease-1s">
      <div id="thumb-wrap" class="summary-data-wrap">
        <div class="summary-data">
          <div id="thumb" :style="music.thumb" />
        </div>
      </div>
      <div id="info-wrap" class="summary-data-wrap">
        <div id="info" class="summary-data">
          <span id="name">{{ music.title }}</span>
          <span id="channel">{{ music.artist }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';

const Component = Vue.extend({
  name: 'EmbedMusic',
  props: {
    musicsUrlList: {
      type: Array,
      default: () => [],
      required: true,
    },
    volume: {
      type: Number,
      validator: val => val >= 0 && val <= 1,
    },
  },
  data() {
    return {
      index: 0,
      indexMax: this.$props.musicsUrlList.length,
      music: {
        artist: 'author',
        title: 'name',
        thumb: 'thumb',
        url: '',
      },
      player: '',
    };
  },
  methods: {
    generateThumbStyle() {
      this.music.thumb = `background: url(${this.music.thumb}`;
    },
    initAudio() {
      this.player = document.getElementById('player');
      this.player.addEventListener('ended', this.onEnding);
      this.player.volume = this.$props.volume;
      this.loadMusic();
      console.log(`Thumb: ${this.music.thumb}`);
    },
    loadMusic() {
      this.music = this.$props.musicsUrlList[this.index];
      this.generateThumbStyle();
      this.nextIndex();
    },
    nextIndex() {
      this.index = this.index + 1 >= this.indexMax ? 0 : this.index + 1;
    },
    onEnding() {
      this.loadMusic();
    },
  },
  mounted() {
    this.initAudio();
  },
});

export default Component;
</script>

<style scoped>
#embed-music {
  width: 300px;
  height: 70px;
  padding: 0 5%;
}

#embed-music #player-wrap {
  display: block;
  position: absolute;
  top: -300%;
}

#embed-music #summary-wrap {
  width: 100%;
  height: 100%;
}

#summary-wrap #thumb-wrap {
  width: 20%;
  float: left;
}

#summary-wrap #info-wrap {
  width: 75%;
  float: right;
}

#summary-wrap #thumb {
  width: 45px;
  height: 45px;
  background-position: center !important;
  background-size: cover !important;
  border-radius: 100%;
}

#summary-wrap #info {
  padding-left: 5%;
}

#summary-wrap #info span {
  line-height: 110%;
  display: block;
}

.summary-data-wrap {
  height: 100%;
  display: table;
}

.summary-data-wrap .summary-data {
  display: table-cell;
  vertical-align: middle;
}
</style>
