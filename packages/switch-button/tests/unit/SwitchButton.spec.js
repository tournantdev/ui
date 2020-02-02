import { shallowMount } from '@vue/test-utils'

import SwitchButton from '@p/switch-button/src/index.vue'

describe('switch-button', () => {
	let wrapper
	let button

	beforeEach(() => {
		wrapper = shallowMount(SwitchButton, {
			slots: {
				default: 'Interact'
			}
		})

		button = wrapper.find('button')
	})

	describe('element classes', () => {
		test('root', () => {
			const rootDiv = wrapper.findAll('div').at(0)

			expect(rootDiv.classes()).toContain('t-ui-switch-button')
		})

		test('label', () => {
			expect(
				wrapper
					.findAll('span')
					.at(0)
					.classes()
			).toContain('t-ui-switch-button__label')
		})
	})

	describe('events', () => {
		it('changes state when clicked', () => {
			button.trigger('click')
			expect(button.attributes('aria-checked')).toBe('true')
			button.trigger('click')
			expect(button.attributes('aria-checked')).toBe('false')
		})

		it('emits click event when clicked', () => {
			button.trigger('click')
			expect(wrapper.emitted().input).toBeTruthy()
		})
	})

	it('has a button with required aria attributes', () => {
		const buttonAttr = button.attributes()
		const slotText = wrapper.find('.t-ui-switch-button__label')

		expect(buttonAttr['aria-checked']).toBe('false')
		expect(buttonAttr['role']).toBe('switch')
		expect(buttonAttr['aria-labelledby']).toBe(slotText.attributes('id'))
	})
})
