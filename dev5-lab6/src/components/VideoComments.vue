<script setup>

import { ref, onMounted, reactive } from 'vue'

let username = ref("");
let message = ref("");
let comments = reactive({ data: [] });

onMounted(() => {
    const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            comments = data;
            // username.value = data[0].user;
            // message.value = data[0].text;
        });
});

</script>

<template>
    <div class="chat" v-for="comment in comments" :key="comment._id">
        <h4>{{ comment.user }}</h4>
        <p>{{ comment.text }}</p>
    </div>
</template>

<style scoped>
.chat {
    background-color: #dbdbdb;
    padding: .5em 1em;
}
</style>
