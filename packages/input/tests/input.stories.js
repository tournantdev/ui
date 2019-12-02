import TournantInput from '../src/index.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

// const dataNoError = { $error: false, $dirty: false }

export default { title: '@tournant/input', decorators: [withKnobs] }

export const withLabel = () => {
	return {
		components: { TournantInput },
		props: {
			label: {
				default: text('Name', 'Name')
			}
		},
		data: () => ({
			validation: { $error: false, $dirty: false },
			name: ''
		}),
		template: `<tournant-input :label="label" :validation="validation" value="" v-model="name" type="text" />`
	}
}

export const typePassword = () => ({
	components: { TournantInput },
	data: () => ({
		validation: { $error: false, $dirty: false },
		password: ''
	}),
	template: `<tournant-input label="password" :validation="validation" value="" v-model="password" type="password" />`
})

export const withError = () => ({
	components: { TournantInput },
	data: () => ({
		validation: { $error: true, $dirty: true },
		name: ''
	}),
	template: `<tournant-input label="Name" :validation="validation" value="" v-model="name" type="password">
		<template v-slot:feedback>
			<p>Please enter your name</p>
		</template>
	</tournant-input>`
})

export const withDescription = () => ({
	components: { TournantInput },
	data: () => ({
		validation: { $error: false, $dirty: false },
		password: ''
	}),
	template: `<tournant-input label="password" :validation="validation" value="" v-model="password" type="password" description="Your password must be unique to this site." />`
})
