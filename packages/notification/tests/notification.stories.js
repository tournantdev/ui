import TournantNotification from '../src/index.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: '@tournant/notification', decorators: [withKnobs] }

export const basicExample = () => ({
	components: { TournantNotification },
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
		<tournant-notification v-for="message in messages" :message="message" /></div>`
})

export const longTimeout = () => ({
	components: { TournantNotification },
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
		<tournant-notification v-for="message in messages" :message="message" :hideAfterSeconds="10" /></div>`
})

export const statusMessage = () => ({
	components: { TournantNotification },
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
		<tournant-notification v-for="message in messages" :message="message" type="polite" />
	</div>`
})
