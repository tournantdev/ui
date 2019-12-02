<template>
	<nav :aria-label="labelText" class="t-ui-breadcrumb">
		<ol class="t-ui-breadcrumb__list">
			<li
				v-for="(item, index) in links"
				:key="item.text"
				class="t-ui-breadcrumb__item"
			>
				<component
					:is="linkElement"
					:to="hasNuxt || hasRouter ? item.to : null"
					:href="hasNuxt || hasRouter ? null : item.to"
					:aria-current="index === links.length - 1 && item.to ? 'page' : null"
					class="t-ui-breadcrumb__link"
					@click="$emit('itemClick', index)"
					>{{ item.text }}</component
				>
			</li>
		</ol>
	</nav>
</template>

<script>
export default {
	props: {
		links: {
			type: Array,
			required: true
		},
		labelText: {
			type: String,
			default: 'Breadcrumb'
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
