import TournantAlert from '../src/index.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: '@tournant/alert', decorators: [withKnobs] }

export const basicExample = () => ({
	components: { TournantAlert },
	props: {
		alertMessage: {
			default: text('Alert message', 'This is an alert message.')
		}
	},
	data: () => ({
		messages: []
	}),
	methods: {
		addAlert() {
			this.messages.push(this.alertMessage)
		}
	},
	template: `<div><div>
		<button @click="addAlert">Add alert</button>
	</div>
		<tournant-alert v-for="message in messages" :message="message" /></div>`
})

export const longTimeout = () => ({
	components: { TournantAlert },
	props: {
		alertMessage: {
			default: text('Alert message', 'This is an alert message.')
		}
	},
	data: () => ({
		messages: []
	}),
	methods: {
		addAlert() {
			this.messages.push(this.alertMessage)
		}
	},
	template: `<div><div>
		<button @click="addAlert">Add alert</button>
	</div>
		<tournant-alert v-for="message in messages" :message="message" :hideAfterSeconds="10" /></div>`
})

export const statusMessage = () => ({
	components: { TournantAlert },
	props: {
		alertMessage: {
			default: text('Status message', 'Page 4 has been loaded.')
		}
	},
	data: () => ({
		messages: []
	}),
	methods: {
		addAlert() {
			this.messages.push(this.alertMessage)
		}
	},
	template: `<div>
		<div>
			<button @click="addAlert">Add alert</button>
		</div>
		<tournant-alert v-for="message in messages" :message="message" type="polite" />
	</div>`
})
