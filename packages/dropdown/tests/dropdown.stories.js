// import Vue from 'vue'
import TournantDropdown from '../src/index.vue'

export default { title: '@tournant/dropdown' }

const items = `<template v-slot:items>
			<button role="menuitem" tabindex="-1">Rename</button>
			<button role="menuitem" tabindex="-1">Delete</button>
		</template>`

export const Basic = () => ({
	components: { TournantDropdown },
	template: `<tournant-dropdown >
		<template v-slot:button-text>
			Toggle
		</template>
		${items}
	</tournant-dropdown>`
})

export const TabAway = () => ({
	components: { TournantDropdown },
	template: `
	<div>
		<p>Above dropdown with a <a href="#">placeholder link</a>.</p>
		<tournant-dropdown >
			<template v-slot:button-text>
				Toggle
			</template>
			${items}
		</tournant-dropdown>
		<p>Some more content underneath the item.</p>
		<p>And another paragraph with <a href="#">a link</a>.
	</div>
	`
})

export const Positioning = () => ({
	components: { TournantDropdown },
	template: `<tournant-dropdown x-position="right">
		<template v-slot:button-text>
			Toggle
		</template>
		${items}
	</tournant-dropdown>`
})
