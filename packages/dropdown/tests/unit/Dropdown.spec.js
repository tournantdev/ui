import { shallowMount, createLocalVue } from '@vue/test-utils'

import Dropdown from '@p/dropdown/src/index.vue'

const localVue = createLocalVue()

localVue.directive('clickaway', {})

describe('Dropdown', () => {
	let wrapper
	let button

	beforeEach(() => {
		wrapper = shallowMount(Dropdown, {
			slots: {
				items:
					'<button role="menuitem" tabindex="-1">Rename</button> <button role="menuitem" tabindex="-1">Delete</button>'
			},
			localVue
		})

		button = wrapper.find('button')
	})

	describe('Events', () => {
		it('@click - open and close menu', () => {
			button.trigger('click')
			expect(wrapper.vm.$refs.menu).toBeDefined()

			button.trigger('click')

			expect(wrapper.vm.isVisible).toBeFalsy()
		})

		it('@keyup.down - open menu', () => {
			button.trigger('keyup.down')

			expect(wrapper.vm.$refs.menu).toBeDefined()
		})

		it('@keyup.down > @keyup.up - opens and closes the menu', async () => {
			await button.trigger('keyup.down')
			expect(wrapper.vm.$refs.menu).toBeDefined()

			button.trigger('keyup.up')
			expect(wrapper.vm.$refs.menu).toBeUndefined()
		})
	})

	describe('Menu toggle button', () => {
		it('exists', () => {
			expect(button).toBeDefined()
		})

		it('has `aria-haspopup`', () => {
			expect(button.attributes('aria-haspopup')).toBeTruthy()
		})

		it('changes its `aria-expanded` attribute', () => {
			button.trigger('click')

			expect(button.attributes('aria-expanded')).toBe('true')

			button.trigger('click')

			expect(button.attributes('aria-expanded')).toBe('false')
		})
	})

	describe('element classes', () => {
		test('root', () => {
			const root = wrapper.find('div')

			expect(root.classes()).toContain('t-ui-dropdown')
		})

		test('toggle', () => {
			console.log(button.classes())
			expect(button.classes()).toContain('t-ui-dropdown__toggle')
		})

		describe('menu', () => {
			let menu

			beforeEach(() => {
				// open the menu to be able to find it
				button.trigger('click')
				menu = wrapper.find('.t-ui-dropdown__menu')
			})

			test('base class', () => {
				expect(menu).toBeDefined()
			})

			test('default positioning', () => {
				expect(menu.classes()).toContain('-is-left')
				expect(menu.classes()).toContain('-is-bottom')
			})

			test('change y position', () => {
				wrapper.setProps({ yPosition: 'top' })

				expect(menu.classes()).not.toContain('-is-bottom')
				expect(menu.classes()).toContain('-is-top')
			})

			test('change x position', () => {
				wrapper.setProps({ xPosition: 'right' })

				expect(menu.classes()).not.toContain('-is-left')
				expect(menu.classes()).toContain('-is-right')
			})
		})
	})
})
