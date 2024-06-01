<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import axios from 'axios'
function test() {
  axios.get('/api/helloworld').then((res) => {
    console.log('/api/helloworld', res)
  })
}
function test2() {
  axios.post('/api/helloworld').then((res) => {
    console.log('/api/helloworld', res)
  })
}
</script>

<template>
  <main>
    <button @click="test">test</button>
    <button @click="test2">test2</button>
    <TheWelcome />
  </main>
</template>
