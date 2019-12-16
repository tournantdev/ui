<template>
	<button :id="id" role="tab" tabindex="-1" @click="onClick">
		<slot />
	</button>
</template>
<script>
export default {
	name: 'TournantTabsWidget',
	props: {
		name: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			id: null
		}
	},
	mounted() {
		this.id = `tab-${this.name}`
	},
	methods: {
		onClick(val) {
			this.$emit('click', val)
		}
	}
}
</script>
