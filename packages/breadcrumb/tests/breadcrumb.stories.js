import TournantBreadcrumb from '../src/index.vue'

export default { title: '@tournant/breadcrumb', excludeStories: /.*Data$/ }

export const itemData = [
	{
		to: '/test-route',
		exact: true,
		text: 'Test'
	},
	{
		to: '/another-test-route',
		text: 'Another test'
	}
]

export const basic = () => ({
	components: { TournantBreadcrumb },
	data: () => ({
		items: itemData
	}),
	template: `<tournant-breadcrumb :links="items" />`
})
