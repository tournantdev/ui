<template>
	<div :id="id" role="tabpanel" hidden aria-labelledby>
		<slot />
	</div>
</template>
<script>
export default {
	name: 'TournantTabpanel',
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
		this.id = `panel-${this.name}`
	}
}
</script>
