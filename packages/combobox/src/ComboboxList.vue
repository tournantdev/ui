<template>
	<transition-group
		id="vCbResultList"
		:class="listClasses.listClass"
		class="t-ui-combobox__list"
		name="list"
		mode="out-in"
		tag="ul"
		tabindex="0"
	>
		<li
			v-if="!items.length"
			key="vCbNoResults"
			class="t-ui-combobox__list-item"
		>
			<span>{{ noResultsMessage }}</span>
		</li>
		<li
			v-for="(item, index) in items"
			v-else
			:key="index"
			:id="getId(index)"
			:class="listClasses.itemClass"
			:aria-selected="(activeItem === index).toString()"
			class="t-ui-combobox__list-item"
			role="option"
			@click="$emit('resultClick', index)"
		>
			<span>{{ item.title }}</span>
		</li>
	</transition-group>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => []
		},
		activeItem: {
			type: Number,
			default: -1
		},
		noResultsMessage: {
			type: String,
			required: true
		}
	},
	computed: {
		listClasses() {
			return this.isStyled
				? {
						listClass: 't-ui-combobox__list--is-styled',
						itemClass: 't-ui-combobox__list-item--is-styled'
				  }
				: ''
		}
	},
	inject: ['isStyled', 'getId']
}
</script>

<style lang="scss">
@import './styles/combobox-list.scss';

.list-enter-active,
.list-leave-active,
.list-move {
	transition: all 0.2s;
}

.list-enter {
	transform: translateY(30px);
}

.list-enter,
.list-leave-to {
	opacity: 0;
}

.list-leave-to {
	position: absolute;
}

.t-ui-combobox__list--is-styled {
	@include t-ui-combobox__list;
}

.t-ui-combobox__list-item--is-styled {
	@include t-ui-combobox__list-item;
}
</style>
