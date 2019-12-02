<template>
	<div
		:class="stateClass"
		class="t-ui-alert"
		:role="role"
		aria-hidden="true"
	></div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'assertive'
		},
		state: {
			type: String,
			default: 'info'
		}
	},
	computed: {
		role() {
			return this.type === 'assertive' ? 'alert' : 'status'
		},
		stateClass() {
			return `is-${this.state}`
		}
	}
}
</script>

<style lang="scss"></style>
