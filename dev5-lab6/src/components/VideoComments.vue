<script setup>

import { ref, onMounted, reactive } from 'vue'

const users = reactive({ data: [] });
const comments = reactive({ data: [] });

onMounted(() => {
    const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
        });
});

</script>

<template>
    <div class="chat">
        <h4>{{ username }}</h4>
        <p>{{ message }}</p>
        videoComments
    </div>
</template>

<style scoped>
.chat {
    background-color: red;
}
</style>
