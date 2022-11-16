<script setup>

import { ref, onMounted } from 'vue'

let username = ref("");
let description = ref("");

//onMounted
onMounted(() => {
    const apiUrl = "https://app.fakejson.com/q/HWUuwiER?token=1cw9g69YHrWF4uSjLGhoyg";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            username.value = data.videos[0].username
            description.value = data.videos[0].description
        });
});

</script>

<template>
    <div>
        <h3>{{ username }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
div {
    padding: 0 2em;
}
</style>
