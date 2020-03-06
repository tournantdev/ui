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
