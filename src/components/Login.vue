<template>
  <div class = "login-container">
    <input v-model="username" placeholder="邮箱">
    <input v-model="password" placeholder="密码" type="password">
    <button @click="login">确认</button>
  </div>
</template>

<script setup>

import { ref } from "vue";
import ajax from "../network/network.js";
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref("");
const password = ref("");

function login() {
    if (username.value.length != 0 && password.value.length != 0) {
        console.log(username.value);
        console.log(password.value);
        ajax.post("/api/user/login", {
            username: username.value,
            password: password.value
        })
        .then(function(response) {
            if (response.status === 200) {
                console.log(response.data);
                console.log(router);
                router.push('/chat');
            }
        })
        .catch(function(error) {

        });
    }
}
</script>

<style scoped>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    input {
        font-family: "Söhne",-apple-system,BlinkMacSystemFont,Helvetica,sans-serif;
        margin-top: 24px;
        width: 320px;
        height: 52px;
        padding: 0px 16px;
        border: 1px solid #c2c8d0;
        color: #2d333a;
        border-radius: 6px;
        font-size: 16px;
        line-height: 1.1;
        outline: none;
        transition: box-shadow .2s ease-in-out, border-color .2s ease-in-out;
    }

    button {
        margin-top: 20px;
        width: 320px;
        height: 52px;
        color: #fff;
        border-radius: 1px;
        background-color: #10a37f;
    }
</style>