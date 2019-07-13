<template>
	<div>
		<header class="component-information">
			<h3 class="small-headline">Dropdown</h3>
			<ul class="resource-list" aria-label="Resource links">
				<li>
					<a
						href="https://github.com/tournantdev/ui/tree/master/packages/dropdown"
						>Source Code</a
					>
				</li>
				<li>
					<a href="https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton"
						>ARIA Authoring Practice</a
					>
				</li>
				<li>
					<a href="https://inclusive-components.design/menus-menu-buttons/"
						>Inclusive Components: Menus & Menu Buttons</a
					>
				</li>
			</ul>
		</header>
		<div class="implementation-example">
			<tournant-dropdown>
				<template v-slot:button-text>
					…
				</template>
				<template v-slot:items>
					<button tabindex="-1" role="menuitem">Rename</button>
					<button tabindex="-1" role="menuitem">Delete</button>
				</template>
			</tournant-dropdown>
		</div>
	</div>
</template>

<script>
import TournantDropdown from '@p/dropdown/src/index.vue'

export default {
	components: {
		TournantDropdown
	}
}
</script>

<style lang="scss">
.component-information {
	background-color: #fff;
	border-bottom: 1px solid black;
	padding: 1rem;
}

.implementation-example {
	border-left: 1px solid black;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
	padding: 1rem;
}

.resource-list {
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;

	& > li {
		padding: 0.25rem 0.5rem;
	}
}
</style>
