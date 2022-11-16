<script setup>

import { ref, onMounted, reactive } from 'vue'
import 'animate.css';

let videos = reactive({ data: [] });
let videoSrc = ref("");
let counter = ref(0);
let animation = ref("");

//onMounted
onMounted(() => {
    const apiUrl = "https://app.fakejson.com/q/HWUuwiER?token=1cw9g69YHrWF4uSjLGhoyg";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            videos.data = data.videos;
            videoSrc.value = data.videos[0].video;
        });
})

const nextVideo = () => {
    animation.value = "animate__fadeOut";
    counter.value++;

    setTimeout(() => {
        videoSrc.value = videos.data[counter.value].video;
        animation.value = "animate__fadeIn";

    }, 400);
}

</script>

<template>
    <div class="blur">
        <div class="controls">
            <a @click.prevent="nextVideo" href="#">⬇</a>
        </div>
        <video :src="videoSrc" :class="animation" class="animate__animated" autoplay muted></video>
    </div>
</template>

<style scoped>
video {
    max-width: 100%;
    max-height: 100vh;
}

.blur {
    background-image: url("../assets/blur.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    position: relative;
}

.controls {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
}

.controls a {
    color: #fff;
    text-decoration: none;
    padding: 1em;
    font-size: 2em;
}
</style>
