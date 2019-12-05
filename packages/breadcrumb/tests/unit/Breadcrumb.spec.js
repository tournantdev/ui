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
			},
			stubs: ['tournant-dynamic-anchor']
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

	it('allows to set `aria-labelledby`', () => {
		wrapper = shallowMount(TournantBreadcrumb, {
			propsData: {
				links: itemData,
				labelledBy: 'test-id'
			}
		})

		expect(wrapper.attributes('aria-labelledby')).toBe('test-id')
		expect(wrapper.attributes('aria-label')).not.toBeDefined()
	})

	it('allows to render a label inside the nav', () => {
		wrapper = shallowMount(TournantBreadcrumb, {
			propsData: {
				links: itemData,
				labelledBy: 'test-id'
			},
			slots: {
				label: '<h3 id="test-id">Custom label</h3>'
			}
		})

		expect(wrapper.find('nav>h3').text()).toBe('Custom label')
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

	describe('Microdata', () => {
		it('marks the list as BreadcrumbList', () => {
			const $list = wrapper.find('ol')
			const { itemscope, itemtype } = $list.attributes()

			expect(itemscope).toBeDefined()
			expect(itemtype).toBe('https://schema.org/BreadcrumbList')
		})

		it('marks list items as itemListElement', () => {
			const $li = wrapper.findAll('li').at(0)
			const { itemscope, itemtype, itemprop } = $li.attributes()

			expect(itemscope).toBeDefined()
			expect(itemtype).toBe('https://schema.org/ListItem')
			expect(itemprop).toBe('itemListElement')
		})

		it('marks links as itemListElement', () => {
			const $link = wrapper.findAll(TournantDynamicAnchor).at(0)
			const { itemtype, itemprop } = $link.attributes()

			expect(itemtype).toBe('https://schema.org/Thing')
			expect(itemprop).toBe('item')
		})

		it('adds the name of list items', () => {
			const $li = wrapper
				.findAll(TournantDynamicAnchor)
				.at(0)
				.find('span')
			const { itemprop } = $li.attributes()

			expect(itemprop).toBe('name')
		})

		it('adds the position in the link element', () => {
			const $meta = wrapper
				.findAll('li')
				.at(0)
				.find('meta')
			const { itemprop, content } = $meta.attributes()

			expect(content).toBe('1')
			expect(itemprop).toBe('position')
		})
	})
})
