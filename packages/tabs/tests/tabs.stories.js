import { TournantTabsWidget, TournantTab, TournantTabpanel } from '../src/'

export default { title: '@tournant/tabs' }

export const Basic = () => ({
	components: { TournantTabsWidget, TournantTab, TournantTabpanel },
	template: `
		<tournant-tabs-widget initial="foo">
			<template slot="tabs">
				<tournant-tab name="foo">Item 1</tournant-tab>
				<tournant-tab name="bar">Item 2</tournant-tab>
				<tournant-tab name="baz">Item 3</tournant-tab>
			</template>
			<template slot="panels">
				<tournant-tabpanel name="foo">Panel 1</tournant-tabpanel>
				<tournant-tabpanel name="bar">Panel 2</tournant-tabpanel>
				<tournant-tabpanel name="baz">Panel 3</tournant-tabpanel>
			</template>
			</tournant-tabs-widget>`
})

export const WithInteractiveContent = () => ({
	components: { TournantTabsWidget, TournantTab, TournantTabpanel },
	template: `
		<tournant-tabs-widget initial="foo">
			<template slot="tabs">
				<tournant-tab name="foo">Link</tournant-tab>
				<tournant-tab name="bar">Boring</tournant-tab>
				<tournant-tab name="baz">Hidden fun</tournant-tab>
			</template>
			<template slot="panels">
				<tournant-tabpanel name="foo">
					<h2>The tab with a link</h2>
					<p>Some tabs have complex content. This, for example, has a linky</p>
					<p>For more information visit our <a href="https://blog.tournant.dev">tabs development notes blog post</a>.
				</tournant-tabpanel>
				<tournant-tabpanel name="bar">
					<h2>This is a boring tab</h2>
					<p>It’s boring because it’s boring</p>
				</tournant-tabpanel>
				<tournant-tabpanel name="baz">
					<h2>This has hidden fun</h2>
					<p>Though I guess the hidden fun isn’t hidden if it is in the name of the tab.</p>
					<p>Any, here’s a GIF for you.</p>
					<img src="https://gif.ovlb.net/tip-tap.gif" alt="GIF of an owl tip-tapping through a living room" />
				</tournant-tabpanel>
			</template>
			</tournant-tabs-widget>`
})
