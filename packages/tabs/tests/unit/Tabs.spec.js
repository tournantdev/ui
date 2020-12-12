import { shallowMount } from '@vue/test-utils'

import { TournantTabsWidget, TournantTab, TournantTabpanel } from '../../src'

describe('tabs', () => {
	let wrapper
	let tabs
	let panels

	beforeEach(async () => {
		wrapper = shallowMount(TournantTabsWidget, {
			propsData: {
				initial: 'foo'
			},
			slots: {
				tabs:
					'<tournant-tab name="foo">Item 1</tournant-tab><tournant-tab name="bar">Item 2</tournant-tab>',
				panels:
					'<tournant-tabpanel name="foo">Panel 1. <a href="#">A link.</a></tournant-tabpanel><tournant-tabpanel name="bar">Panel 2</tournant-tabpanel>'
			},
			stubs: {
				'tournant-tab': TournantTab,
				'tournant-tabpanel': TournantTabpanel
			}
		})

		await wrapper.vm.$nextTick()
		tabs = wrapper.findAll('[role="tab"]')
		panels = wrapper.findAll('[role="tabpanel"]')
	})

	describe('Tab Widget', () => {
		it('it starts with initial tab "foo"', () => {
			expect(panels.at(0).isVisible()).toBe(true)

			// .toBeFalsy, or isVisible == false don't work here, needs to be more specific:
			expect(panels.at(1).attributes('hidden')).toBe('')
		})

		it('its tablist is one tab stop', () => {
			tabs.at(1).trigger('keydown.tab')
			expect(tabs.at(1) === document.activeElement).toBe(false)
		})

		it('exists', () => {
			expect(tabs).toBeDefined()
			expect(panels).toBeDefined()
		})
	})

	describe('Events', () => {
		it('@click - Selects tab panel', () => {
			tabs.at(1).trigger('click')
			expect(panels.at(1).isVisible()).toBe(true)

			// .toBeFalsy, or isVisible == false don't work here, needs to be more specific:
			expect(panels.at(0).attributes('hidden')).toBeUndefined()
		})

		it('@keydown.right - selects next tab', () => {
			tabs.at(0).trigger('keydown.right')

			expect(panels.at(1).isVisible()).toBe(true)

			// .toBeFalsy, or isVisible == false don't work here, needs to be more specific:
			expect(panels.at(0).attributes('hidden')).toBeUndefined()
		})

		it('@keydown.right - selects previous tab', () => {
			tabs.at(1).trigger('keydown.right')

			expect(panels.at(0).isVisible()).toBe(true)

			// .toBeFalsy, or isVisible == false don't work here, needs to be more specific:
			expect(panels.at(1).attributes('hidden')).toBe('')
		})

		it('@keydown.right on the right edge of the tablist - selects first tab', () => {
			tabs.at(1).trigger('keydown.right')

			expect(panels.at(0).isVisible()).toBe(true)

			// .toBeFalsy, or isVisible == false don't work here, needs to be more specific:
			expect(panels.at(1).attributes('hidden')).toBe('')
		})

		it('@keydown.left on the left edge of the tablist - selects last tab', () => {
			tabs.at(0).trigger('keydown.left')

			expect(panels.at(1).isVisible()).toBe(true)

			// .toBeFalsy, or isVisible == false don't work here, needs to be more specific:
			expect(panels.at(0).attributes('hidden')).toBeUndefined()
		})
	})
})
