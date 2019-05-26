<template>
  <div id="app">
    <vue-a11y-input
      v-model="password"
      :required="true"
      :validation="$v.password"
      label="Your password"
      type="password"
      name="password"
    />
  </div>
</template>

<script>
import VueA11yInput from '@/VueA11yInput.vue'

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'App',
  components: {
    VueA11yInput
  },
  data() {
    return {
      password: ''
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(8)
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
