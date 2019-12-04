<template>
	<component
		:is="linkElement"
		:to="linkElement === 'a' ? null : link.to"
		v-bind="$props"
		:href="linkElement === 'a' ? link.to : null"
		class="t-ui-dynamic-anchor"
		>{{ link.text }}</component
	>
</template>

<script>
export default {
	props: {
		link: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			hasRouter: typeof this.$router !== 'undefined',
			hasNuxt: typeof this.$nuxt !== 'undefined'
		}
	},
	computed: {
		linkElement() {
			if (this.link.useNativeLinkElement) {
				return 'a'
			}

			if (this.hasNuxt) {
				return 'nuxt-link'
			}

			if (this.hasRouter) {
				return 'router-link'
			}

			return 'a'
		}
	}
}
</script>

<style lang="scss"></style>
