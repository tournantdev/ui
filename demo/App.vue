<template>
  <div id="app">
    <vue-a11y-input v-model="input" label="Say hello" />
  </div>
</template>

<script>
import VueA11yInput from '@/VueA11yInput.vue'

export default {
  name: 'App',
  components: {
    VueA11yInput
  },
  data() {
    return {
      input: 'value'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
