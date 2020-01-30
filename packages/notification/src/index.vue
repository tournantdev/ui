<template>
	<div
		:class="stateClass"
		:role="role"
		:aria-hidden="ariaHidden.toString()"
		class="t-ui-alert"
	>
		{{ message }}
	</div>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'assertive'
		},
		state: {
			type: String,
			default: 'info'
		},
		hideAfterSeconds: {
			type: Number,
			default: 5
		}
	},
	data() {
		return {
			ariaHidden: false,
			timeout: null
		}
	},
	computed: {
		role() {
			return this.type === 'assertive' ? 'alert' : 'status'
		},
		stateClass() {
			return `is-${this.state}`
		}
	},
	mounted() {
		this.timeout = setTimeout(() => {
			this.ariaHidden = true

			this.$emit('messageTimeout')
		}, this.hideAfterSeconds * 1000)
	},
	beforeDestroy() {
		clearTimeout(this.timeout)
	}
}
</script>

<style lang="scss">
.t-ui-alert {
	&[aria-hidden='true'] {
		display: none;
	}
}
</style>
