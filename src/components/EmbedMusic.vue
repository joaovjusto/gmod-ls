<template>
  <div id="embed-music" class="tag">
    <div id="player-wrap">
      <audio id="player" :src="music.url" autoplay allow="autoplay" />
    </div>
    <div id="summary-wrap" class="summary-data-wrap animation-ease-1s">
      <div id="thumb-wrap" class="summary-data">
        <content-placeholders
          id="thumb"
          :style="!(flags.musicLoaded) ? 'display: block' : 'display: none'"
        >
          <content-placeholders-img />
        </content-placeholders>
        <img
          id="thumb"
          :src="music.thumb"
          :style="flags.musicLoaded ? 'display: block' : 'display: none'"
        />
      </div>
      <div id="info-wrap" class="summary-data">
        <content-placeholders
          id="thumb"
          :style="!(flags.musicLoaded) ? 'display: block' : 'display: none'"
        >
          <content-placeholders-text :lines="2" style="width: 200px" />
        </content-placeholders>
        <span
          id="name"
          :style="(flags.musicLoaded) ? 'display: block' : 'display: none'"
          >{{ music.title }}</span
        >
        <span
          id="channel"
          :style="(flags.musicLoaded) ? 'display: block' : 'display: none'"
          >{{ music.artist }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';

const DEFAULT_VOLUME = 0.7;

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
      default: DEFAULT_VOLUME,
      validator: val => val >= 0 && val <= 1,
    },
  },
  data() {
    return {
      flags: {
        musicLoaded: false,
        thumbLoaded: false,
      },
      index: 0,
      indexMax: this.$props.musicsUrlList.length,
      music: {
        artist: 'author',
        title: 'name',
        thumb: 'thumb',
        url: '',
      },
      player: '',
      thumb: '',
    };
  },
  methods: {
    initAudio() {
      this.player = document.getElementById('player');
      this.thumb = document.getElementById('thumb');
      this.player.addEventListener('ended', this.onAudioEnding);
      this.player.addEventListener('loadeddata', this.onAudioLoad);
      this.updateVolume();
    },
    loadMusic() {
      this.music = this.$props.musicsUrlList[this.index];
      this.nextIndex();
    },
    nextIndex() {
      this.index = this.index + 1 >= this.indexMax ? 0 : this.index + 1;
    },
    updateVolume() {
      this.player.volume = Number.isNaN(this.$props.volume) ? DEFAULT_VOLUME : this.$props.volume;
    },
    onAudioEnding() {
      this.resetFlags();
      this.loadMusic();
    },
    onAudioLoad() {
      this.flags.musicLoaded = true;
    },
    resetFlags() {
      this.flags = {
        musicLoaded: false,
      };
    },
  },
  watch: {
    volume: function() {
      this.updateVolume();
    },
  },
  mounted() {
    this.initAudio();
    this.loadMusic();
  },
});

export default Component;
</script>

<style scoped>
#embed-music {
  width: 300px;
  padding: 4% 5%;
}

#embed-music #player-wrap {
  display: none;
}

#embed-music #summary-wrap {
  width: 100%;
  overflow: hidden;
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
  border-radius: 100%;
}

#summary-wrap #info-wrap span {
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
