<template>
	<div id="app">
		<h1>This is working.</h1>
	</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
	name: 'App',
	components: {},
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

.t-ui-input__label {
	display: block;
}
</style>
