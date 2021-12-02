<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import axios from 'axios'

export default defineComponent({
    name: 'LoginPage',
    setup() {
        var username: Ref = ref(null);
        var password: Ref = ref(null);
        const login = (() => {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8001/api/user/login',
                data: {
                    "username": username.value,
                    "password": password.value
                },
                transformRequest: [
                    function (data) {
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        ret = ret.substring(0, ret.lastIndexOf('&'));
                        return ret
                    }
                ],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                    // const { token } = response.data.access_token
                    localStorage.setItem('token', response.data.access_token)
                })
                .catch((error) => {
                    console.error(error)
                })
        })
        return {
            username,
            password,
            login
        }
    }
})

</script>

<template>
    <div class="wrapper">
        <div class="container">
            <h1>Welcome</h1>

            <form class="form">
                <input type="text" placeholder="Username" v-model="username" />
                <input type="password" placeholder="Password" v-model="password" />
                <button type="submit" id="login-button" @click="login" >
                    <router-link :to="{name: 'markdown'}">Login</router-link>    
                </button>
            </form>
        </div>
        
        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>



<style scoped>
.wrapper {
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 400px;
    margin-top: -200px;
    overflow: hidden;
}

.wrapper.form-success .container h1 {
    -webkit-transform: translateY(85px);
    -ms-transform: translateY(85px);
    transform: translateY(85px);
}
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 80px 0;
    height: 400px;
    text-align: center;
}
.container h1 {
    font-size: 40px;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-timing-function: ease-in-put;
    transition-timing-function: ease-in-put;
    font-weight: 200;
}
form {
    padding: 20px 0;
    position: relative;
    z-index: 2;
}
form input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
    width: 250px;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;
    color: white;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
    font-weight: 300;
}
form input:hover {
    background-color: rgba(255, 255, 255, 0.4);
}
form input:focus {
    background-color: white;
    width: 300px;
    color: #53e3a6;
}
form button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: #53e3a6;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 18px;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
}
form button:hover {
    background-color: #f5f7f9;
}
a {
    color: #53e3a6;
    text-decoration: none;
}
</style>
