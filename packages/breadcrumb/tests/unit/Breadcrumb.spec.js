import { shallowMount } from '@vue/test-utils'

import TournantBreadcrumb from '../../src/index.vue'

import { itemData } from '../breadcrumb.stories'

describe('breadcrumb', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantBreadcrumb, {
			propsData: {
				links: itemData
			},
			stubs: ['router-link']
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
		wrapper.find('a').trigger('click')

		expect(wrapper.emitted('itemClick')).toBeTruthy()
	})
})
