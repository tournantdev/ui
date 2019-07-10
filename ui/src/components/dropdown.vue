<template>
	<div>
		<tournant-dropdown>
			<template v-slot:button-text>
				…
			</template>
			<template v-slot:buttons>
				<button tabindex="-1" role="menuitem">Rename</button>
				<button tabindex="-1" role="menuitem">Delete</button>
			</template>
		</tournant-dropdown>
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

<style>
</style>
