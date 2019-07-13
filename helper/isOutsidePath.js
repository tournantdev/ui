/**
 * Check if the target of an event is outside of an element
 *
 * @param {Event} evt
 * @param {Node} element
 * @returns
 */
const isOutsidePath = (evt, element) => {
	return evt.composedPath
		? !evt.composedPath().includes(element)
		: !(evt.target === element || element.contains(evt.target))
}

export default isOutsidePath
