<template>
	<div id="app">
		<h1>This is working.</h1>
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

.v-a11y-input__label {
	display: block;
}
</style>
