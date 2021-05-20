<template>
    <the-navbar />
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import Hello from './components/Hello'
import TheNavbar from './components/TheNavbar'
import AboutMe from './components/AboutMe'
export default {
  components: { Hello, TheNavbar, AboutMe }
}
</script>

<style>

</style>