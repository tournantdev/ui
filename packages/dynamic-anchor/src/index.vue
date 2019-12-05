<script>
import Vue from 'vue'

import getElementTagName from '@h/getElementTagName'

export default {
	name: 'TournantDynamicAnchor',
	functional: true,
	extends: Vue.component('RouterLink'),
	props: {
		useNativeLinkElement: {
			type: Boolean,
			default: false
		}
	},
	render(createEl, context) {
		const { props, parent } = context

		const el = getElementTagName(
			props.useNativeLinkElement,
			parent.$root.$options.nuxt,
			parent.$root.$options.router
		)
		const isNative = el === 'a'

		const data = !isNative
			? context.data
			: {
					...context.data,
					attrs: {
						...context.data.attrs,
						href: context.data.attrs.href || props.to || context.data.attrs.to,
						to: null
					}
			  }

		return createEl(
			el,
			{
				...data,
				props: {
					...props
				},
				on: context.listeners
			},
			context.children
		)
	}
}
</script>
