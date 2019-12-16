<template>
	<div>
		<div
			ref="tablist"
			class="t-ui-tabswidget"
			role="tablist"
			@click="clickHandler"
			@keydown="keydownHandler"
		>
			<slot name="tabs"></slot>
		</div>
		<div ref="panellist">
			<slot name="panels"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TournantTabsWidget',
	props: {
		initial: {
			type: String,
			required: true,
			default: null
		}
	},
	data() {
		return {
			tabs: [],
			panels: [],
			activeTab: `tab-${this.initial}`
		}
	},
	mounted() {
		let slotEl = null
		for (slotEl of this.$slots.tabs) {
			if (
				slotEl.componentOptions &&
				slotEl.componentOptions.tag === 'tournant-tab'
			) {
				if (slotEl.componentInstance.$el.disabled) return
				this.tabs.push(slotEl.componentInstance)
			}
		}
		for (slotEl of this.$slots.panels) {
			if (
				slotEl.componentOptions &&
				slotEl.componentOptions.tag === 'tournant-tabpanel'
			) {
				this.panels.push(slotEl.componentInstance)
			}
		}
		this.panels.forEach((panel, i) => {
			panel.$el.setAttribute('aria-labelledby', this.tabs[i].id)
		})
		this.changeTab(this.activeTab)
	},
	methods: {
		changeTab(tab) {
			this.$nextTick(() => {
				const tabEl = this.$refs.tablist.querySelector(`#${tab}`)
				this.panels.forEach(panel => {
					panel.$el.hidden = true
				})
				this.$refs.panellist.querySelector(
					`[aria-labelledby=${tab}]`
				).hidden = false
				this.$refs.tablist.querySelectorAll('[aria-selected]').forEach(el => {
					el.removeAttribute('aria-selected')
					el.setAttribute('tabindex', '-1')
				})
				tabEl.setAttribute('aria-selected', 'true')
				tabEl.setAttribute('tabindex', '0')
				tabEl.focus()
				this.activeTab = tab
				this.$emit('activeTab', tab.replace('tab-', ''))
				this.$emit('click')
			})
		},
		clickHandler(e) {
			this.changeTab(e.target.id)
		},
		keydownHandler: function(e) {
			const activeElem = this.$refs.tablist.querySelector(`#${this.activeTab}`)
			const activeIndex = Array.from(this.$refs.tablist.children).indexOf(
				activeElem
			)
			let targetTab
			switch (e.keyCode) {
				case 37:
					if (activeIndex - 1 < 0) {
						targetTab = this.tabs[this.tabs.length - 1]
					} else {
						targetTab = this.tabs[activeIndex - 1]
					}
					this.changeTab(targetTab.id)
					break
				case 39:
					if (activeIndex + 1 > this.tabs.length - 1) {
						targetTab = this.tabs[0]
					} else {
						targetTab = this.tabs[activeIndex + 1]
					}
					this.changeTab(targetTab.id)
					break
				default:
					return
			}
		}
	}
}
</script>
