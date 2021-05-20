<template>
  <div class="card">
    <h1 class="text-center">Приветствую на моём сайте-резюме.</h1>
    <p class="text-center">Здесь Вы сможете найти всю информацию обо мне.</p>
    <div class="posBTN">
      <button class="btn primary" @click="toggleInfo"> {{ info ? 'Закрыть' : 'Показать' }} информацию</button>
    </div>
  </div>
  <about-me v-if="info"></about-me>
</template>

<script>
import { ref } from 'vue'
import AboutMe from './AboutMe'
export default {
  setup() {
    const info = ref(false)

    const toggleInfo = () => info.value = !info.value

    return {
      toggleInfo,
      info
    }
  },
  components: {AboutMe}
}
</script>

<style>

</style>