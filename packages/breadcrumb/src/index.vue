<template>
	<nav
		:aria-label="!labelledBy && labelText"
		:aria-labelledby="labelledBy"
		class="t-ui-breadcrumb"
	>
		<slot name="label" />
		<ol
			class="t-ui-breadcrumb__list"
			itemscope
			itemtype="https://schema.org/BreadcrumbList"
		>
			<li
				v-for="(item, index) in links"
				:key="item.text"
				class="t-ui-breadcrumb__item"
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<tournant-dynamic-anchor
					:to="item.to"
					:use-native-link-element="item.useNativeLinkElement"
					:aria-current="index === links.length - 1 && item.to ? 'page' : null"
					class="t-ui-breadcrumb__link"
					itemtype="https://schema.org/Thing"
					itemprop="item"
					@click.native="$emit('itemClick', index)"
					><span itemprop="name">{{ item.text }}</span></tournant-dynamic-anchor
				>
				<meta :content="(index + 1).toString()" itemprop="position" />
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
		},
		labelledBy: {
			type: [String, Boolean],
			default: false
		}
	}
}
</script>
