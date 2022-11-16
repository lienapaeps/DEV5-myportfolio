<script setup>

import { ref, onMounted, reactive } from 'vue'

let username = ref("");
let message = ref("");

onMounted(() => {
    const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            username.value = data[0].user;
            message.value = data[0].text;
        });
});

</script>

<template>
    <div class="chat">
        <h4>{{ username }}</h4>
        <p>{{ message }}</p>
    </div>
</template>

<style scoped>
.chat {
    background-color: #dbdbdb;
    padding: 1em;
}
</style>
