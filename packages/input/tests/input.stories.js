import TournantInput from '../src/index.vue'

// const dataNoError = { $error: false, $dirty: false }

export default { title: '@tournant/input' }

export const withLabel = () => ({
	components: { TournantInput },
	data: () => ({
		validation: { $error: false, $dirty: false },
		name: ''
	}),
	template: `<tournant-input label="Test Name" :validation="validation" value="" v-model="name" type="text" />`
})

export const typePassword = () => ({
	components: { TournantInput },
	data: () => ({
		validation: { $error: false, $dirty: false },
		password: ''
	}),
	template: `<tournant-input label="password" :validation="validation" value="" v-model="password" type="password" />`
})

export const withDescription = () => ({
	components: { TournantInput },
	data: () => ({
		validation: { $error: false, $dirty: false },
		password: ''
	}),
	template: `<tournant-input label="password" :validation="validation" value="" v-model="password" type="password" description="Your password must be unique to this site." />`
})
