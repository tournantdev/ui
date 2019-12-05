export default function getElementTagName(useNative, nuxt, router) {
	if (useNative) {
		return 'a'
	}

	if (nuxt) {
		return 'nuxt-link'
	}

	if (router) {
		return 'router-link'
	}

	return 'a'
}
