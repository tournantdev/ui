import { shallowMount, createLocalVue } from '@vue/test-utils'

import Dropdown from '@p/dropdown/src/index.vue'

const localVue = createLocalVue()

describe('Dropdown', () => {
	let wrapper
	let button
	let menu

	beforeEach(() => {
		wrapper = shallowMount(Dropdown, {
			slots: {
				'button-text': 'Options',
				items: `<button role="menuitem" tabindex="-1">Rename</button>
					<button role="menuitem" tabindex="-1">Delete</button>
				`
			},
			localVue,
			attachToDocument: true
		})

		button = wrapper.find('button')
	})

	describe('Events', () => {
		let firstMenuItem

		it('@click - open and close menu', async () => {
			button.trigger('click')
			await wrapper.vm.$nextTick()
			expect(wrapper.vm.$refs.menu).toBeDefined()

			button.trigger('click')
			await wrapper.vm.$nextTick()
			expect(wrapper.vm.isVisible).toBeFalsy()
		})

		it('@keydown.down - open menu', async () => {
			button.trigger('keydown.down')

			await wrapper.vm.$nextTick()

			expect(wrapper.vm.$refs.menu).toBeDefined()
		})

		it('@keydown.down > @keydown.up - opens and closes the menu', async () => {
			await button.trigger('keydown.down')
			await wrapper.vm.$nextTick()
			expect(wrapper.vm.$refs.menu).toBeDefined()

			button.trigger('keydown.up')
			await wrapper.vm.$nextTick()
			expect(wrapper.vm.$refs.menu).toBeUndefined()
		})

		it('@keydown.down - focuses first menu item', async () => {
			button.trigger('keydown.down')

			await wrapper.vm.$nextTick()

			firstMenuItem = wrapper.findAll('[role="menuitem"]').at(0)

			expect(firstMenuItem.element).toBe(document.activeElement)
		})

		it('@keydown.down - loops through items', async () => {
			// open
			button.trigger('keydown.down')

			const { length } = wrapper.findAll('[role="menuitem"]')

			for (let i = 0; i < length; i++) {
				button.trigger('keydown.down')
			}

			firstMenuItem = wrapper.findAll('[role="menuitem"]').at(0)

			await wrapper.vm.$nextTick()

			expect(firstMenuItem.element).toBe(document.activeElement)
		})

		it('@keydown.up - focusses last item if at the beginning', async () => {
			// open
			button.trigger('keydown.down')

			await wrapper.vm.$nextTick()

			menu = wrapper.find('[role="menu"]')
			menu.trigger('keydown.up')

			const { length } = wrapper.findAll('[role="menuitem"]')
			const lastItem = wrapper.findAll('[role="menuitem"]').at(length - 1)

			expect(lastItem.element).toBe(document.activeElement)
		})
	})

	describe('Menu toggle button', () => {
		it('exists', () => {
			expect(button).toBeDefined()
		})

		it('has `aria-haspopup`', () => {
			expect(button.attributes('aria-haspopup')).toBeTruthy()
		})

		it('changes its `aria-expanded` attribute', async () => {
			button.trigger('click')
			await wrapper.vm.$nextTick()
			expect(button.attributes('aria-expanded')).toBe('true')

			button.trigger('click')
			await wrapper.vm.$nextTick()
			expect(button.attributes('aria-expanded')).toBe('false')
		})
	})

	describe('element classes', () => {
		test('root', () => {
			const root = wrapper.find('div')

			expect(root.classes()).toContain('t-ui-dropdown')
		})

		test('toggle', () => {
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

	describe('accessible name', () => {
		let spy
		// this asserts that the no text warning gets printed. as it is called from the mounted hook, we don't need to use the var
		// eslint-disable-next-line no-unused-vars
		let wrapperNoName

		beforeEach(() => {
			spy = jest.spyOn(console, 'warn').mockImplementation()

			wrapperNoName = shallowMount(Dropdown, {
				slots: {
					'button-text': ''
				}
			})
		})

		afterEach(() => {
			spy.mockRestore()
		})

		test('warns if button has no name', () => {
			expect(spy).toHaveBeenCalled()
		})
	})
})

describe('Dropdown – menuitemcheckbox', () => {
	let wrapper
	let button

	beforeEach(() => {
		wrapper = shallowMount(Dropdown, {
			slots: {
				'button-text': 'Options',
				items: `<button role="menuitemcheckbox" tabindex="-1">Rename</button>
					<button role="menuitemcheckbox" tabindex="-1">Delete</button>
				`
			},
			localVue,
			attachToDocument: true
		})

		button = wrapper.find('button')
	})

	it('detects `menuitemradio` button', async () => {
		button.trigger('click')

		await wrapper.vm.$nextTick()

		expect(wrapper.vm.items).toHaveLength(2)
	})
})

describe('Dropdown – menuitemradio', () => {
	let wrapper
	let button

	beforeEach(() => {
		wrapper = shallowMount(Dropdown, {
			slots: {
				'button-text': 'Options',
				items: `<button role="menuitemradio" tabindex="-1">Rename</button>
					<button role="menuitemradio" tabindex="-1">Delete</button>
				`
			},
			localVue,
			attachToDocument: true
		})

		button = wrapper.find('button')
	})

	it('detects `menuitemradio` button', async () => {
		button.trigger('click')

		await wrapper.vm.$nextTick()

		expect(wrapper.vm.items).toHaveLength(2)
	})
})
