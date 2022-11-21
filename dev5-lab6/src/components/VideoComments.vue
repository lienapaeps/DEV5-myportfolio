<script setup>

import { ref, onMounted, reactive } from 'vue'

let comments = reactive({ data: [] });
let comment = ref("");

onMounted(() => {
    const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            comments.comments = data;
        });
});

const addComment = () => {
    const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/";

    let data = {
        user: "Lienapiena",
        text: comment.value
    }
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            comments.comments.push({
                _id: data.data._id,
                user: data.data.user,
                text: data.data.text
            });
        });
}

</script>

<template>
    <div class="comments">
        <div class="chat" v-for="comment in comments.comments" :key="comment.id">
            <h4>{{ comment.user }}</h4>
            <p>{{ comment.text }}</p>
        </div>
    </div>

    <div class="form">
        <input type="text" v-model="comment">
        <button @click.prevent="addComment">Add comment ...</button>
    </div>
</template>

<style scoped>
.comments {
    overflow-y: auto;
    height: 70vh;
}

.chat {
    background-color: #dbdbdb;
    padding: .5em 1em;
}

.form {
    padding: 1em;
}

.form input {
    margin-right: 1em;
    padding: .5em 1em;
}

.form button {
    padding: .5em 1em;
}
</style>
