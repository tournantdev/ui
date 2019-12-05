<template>
	<nav :aria-label="labelText" class="t-ui-breadcrumb">
		<ol class="t-ui-breadcrumb__list">
			<li
				v-for="(item, index) in links"
				:key="item.text"
				class="t-ui-breadcrumb__item"
			>
				<tournant-dynamic-anchor
					:to="item.to"
					:use-native-link-element="item.useNativeLinkElement"
					:aria-current="index === links.length - 1 && item.to ? 'page' : null"
					class="t-ui-breadcrumb__link"
					@click.native="$emit('itemClick', index)"
					>{{ item.text }}</tournant-dynamic-anchor
				>
			</li>
		</ol>
	</nav>
</template>

<script>
import TournantDynamicAnchor from '@tournant/dynamic-anchor'

export default {
	components: {
		TournantDynamicAnchor
	},
	props: {
		links: {
			type: Array,
			required: true
		},
		labelText: {
			type: String,
			default: 'Breadcrumb'
		}
	}
}
</script>
