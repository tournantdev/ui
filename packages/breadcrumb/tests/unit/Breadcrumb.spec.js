import { shallowMount } from '@vue/test-utils'
import TournantDynamicAnchor from '@tournant/dynamic-anchor'

import TournantBreadcrumb from '../../src/index.vue'

import { itemData, noLastLinkData } from '../breadcrumb.stories'

describe('@tournant/breadcrumb', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantBreadcrumb, {
			propsData: {
				links: itemData
			}
		})
	})

	it('renders a `nav element`', () => {
		expect(wrapper.find('nav')).toBeDefined()
	})

	it('sets an `aria-label` to the nav element', () => {
		expect(wrapper.attributes('aria-label')).toBe('Breadcrumb')
	})

	it('allows to change the label text', () => {
		wrapper.setProps({ labelText: 'Brotkrume' })

		expect(wrapper.attributes('aria-label')).toBe('Brotkrume')
	})

	it('emits an event if an item is clicked', () => {
		wrapper.find(TournantDynamicAnchor).trigger('click')

		expect(wrapper.emitted('itemClick')).toBeTruthy()
	})

	it('renders `aria-current`', () => {
		const $links = wrapper.findAll(TournantDynamicAnchor)
		const $last = $links.at($links.length - 1)

		expect($last.attributes('aria-current')).toBe('page')
	})

	it('does not render `aria-current` if the last item has no link', () => {
		wrapper.setProps({ links: noLastLinkData })

		const $links = wrapper.findAll(TournantDynamicAnchor)
		const $last = $links.at($links.length - 1)

		expect($last.attributes('aria-current')).toBeUndefined()
	})
})
