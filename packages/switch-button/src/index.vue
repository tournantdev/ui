<template>
	<div class="t-ui-switch-button">
		<span :id="id" class="t-ui-switch-button__label">
			<slot></slot>
		</span>
		<button
			class="t-ui-switch-button__button"
			role="switch"
			:aria-checked="isChecked.toString()"
			:value="value"
			:aria-labelledby="id"
			@click="toggle"
		>
			<span class="t-ui-switch-button__text t-ui-switch-button__text--on">
				{{ onLabel }}
			</span>
			<span class="t-ui-switch-button__text t-ui-switch-button__text--off">
				{{ offLabel }}
			</span>
		</button>
	</div>
</template>

<script>
export default {
	name: 'TournantSwitchButton',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		onLabel: {
			type: String,
			default: 'on'
		},
		offLabel: {
			type: String,
			default: 'off'
		}
	},
	data() {
		return {
			id: null,
			isChecked: this.value
		}
	},
	watch: {
		value(value) {
			this.isChecked = value
		}
	},
	mounted() {
		this.id = Math.random()
			.toString(36)
			.substring(2, 15)
	},
	methods: {
		toggle() {
			this.isChecked = !this.isChecked
			this.$emit('input', this.isChecked)
		}
	}
}
</script>

<style>
.t-ui-switch-button__button {
	-webkit-appearance: none;
	padding: 0;
	font: inherit;
}

.t-ui-switch-button__text {
	font-size: 0.75rem;
	font-weight: bold;
	display: inline-block;
	padding: 0.25rem;
}

[aria-checked='true'] .t-ui-switch-button__text--on,
[aria-checked='false'] .t-ui-switch-button__text--off {
	background-color: #000;
	border: 2px solid transparent;
	color: #fff;
}
</style>
