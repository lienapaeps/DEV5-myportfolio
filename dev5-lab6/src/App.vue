<script setup>// logica
import VideoPlayer from './components/VideoPlayer.vue'
import VideoDetails from './components/VideoDetails.vue'
import VideoComments from './components/VideoComments.vue'
</script>

<template>
  <div class="app">
    <VideoPlayer />
    <div class="side">
      <VideoDetails />
      <VideoComments />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 8fr 4fr;
}

.side {
  display: flex;
  flex-direction: column;
}
</style>
