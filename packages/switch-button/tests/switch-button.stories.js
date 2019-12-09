import TournantSwitchButton from '../src/index.vue'

export default { title: '@tournant/switch-button' }

export const Basic = () => ({
	components: { TournantSwitchButton },
	template: `<tournant-switch-button>Fun mode</tournant-switch-button>`
})

export const defaultTrue = () => ({
	components: { TournantSwitchButton },
	template: `<tournant-switch-button value="true">Fun mode</tournant-switch-button>`
})

export const usingPropsForLabelling = () => ({
	components: { TournantSwitchButton },
	template: `<tournant-switch-button on-label="An" off-label="Aus">Kontrastmodus</tournant-switch-button>`
})
