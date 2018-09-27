import { shallowMount } from '@vue/test-utils'
import A11yCombobox from '@/A11yCombobox.vue'

const items = [
  { id: 1, title: 'test title 2' },
  { id: 2, title: 'test title 2' },
  { id: 3, title: 'test title 3' },
  { id: 4, title: 'test title 4' }
]
const inputLabel = 'Search for item'
const descendantIdBase = 'vCbItem_'

describe('A11yCombobox.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(A11yCombobox, {
      propsData: {
        items,
        inputLabel
      },
      attachToDocument: true
    })
  })

  it('has a required inputLabel', () => {
    expect(wrapper.vm.$options.props.inputLabel.required).toBeTruthy()
  })

  it('has an input with required aria attributes', () => {
    const $input = wrapper.find('input')
    const inputAttr = $input.attributes()

    expect(inputAttr['aria-autocomplete']).toBe('list')
    expect(inputAttr['role']).toBe('searchbox')
  })

  it('sets the correct aria-label', () => {
    const $input = wrapper.find('input')

    expect($input.attributes()['aria-label']).toBe(inputLabel)
  })

  it('has a method to define the id of a list item', () => {
    expect(wrapper.vm.getId).toBeDefined()
  })

  it('creates the correct id', () => {
    expect(wrapper.vm.getId(1)).toBe(`${descendantIdBase}1`)
  })

  it('starts at arrow position of `-1', () => {
    expect(wrapper.vm.$data.arrowPosition).toBe(-1)
  })

  it('has no active descendant by default', () => {
    const $input = wrapper.find('input')
    const inputAttr = $input.attributes()

    expect(inputAttr['aria-activedescendant']).toBe('')
  })

  it('updates `aria-activedescendant` based on arrowPosition', () => {
    const arrowPosition = 1
    wrapper.setData({ arrowPosition })
    const $input = wrapper.find('input')
    const inputAttr = $input.attributes()

    expect(inputAttr['aria-activedescendant']).toBe(
      `${descendantIdBase}${arrowPosition}`
    )
  })

  describe('arrow keys', () => {
    it('calls onKeyDown if pressing the down arrow key', () => {
      const stub = jest.fn()
      const $input = wrapper.find('input')

      wrapper.setMethods({ onKeyDown: stub })

      $input.trigger('keyup.down')

      expect(wrapper.vm.onKeyDown).toBeCalled()
    })

    it('changes nothing when pressing arrow keys if the list is hidden (default state)', () => {
      wrapper.vm.onKeyDown()
      expect(wrapper.vm.arrowPosition).toBe(-1)
      wrapper.vm.onKeyUp()
      expect(wrapper.vm.arrowPosition).toBe(-1)
    })

    it('increments the value if the list is visible', () => {
      wrapper.setData({ inputValue: 'sa', hasFocus: true, arrowPosition: -1 })
      wrapper.vm.onKeyDown()

      expect(wrapper.vm.arrowPosition).toBe(0)
    })

    it('does not increment the value further than the length of the list', () => {
      wrapper.setData({
        inputValue: 'sa',
        hasFocus: true,
        arrowPosition: items.length
      })
      wrapper.vm.onKeyDown()

      expect(wrapper.vm.arrowPosition).toBe(items.length)
    })

    it('decrements the value if the list is visible', () => {
      wrapper.setData({ inputValue: 'sa', hasFocus: true, arrowPosition: 2 })
      wrapper.vm.onKeyUp()

      expect(wrapper.vm.arrowPosition).toBe(1)
    })

    it('activates the last item in the list if the beginning is reached', () => {
      wrapper.setData({ inputValue: 'sa', hasFocus: true, arrowPosition: -1 })
      wrapper.vm.onKeyUp()

      expect(wrapper.vm.arrowPosition).toBe(items.length - 1)
    })
  })

  describe('enter key', () => {
    it('calls onEnter', () => {
      const stub = jest.fn()
      const $input = wrapper.find('input')

      wrapper.setMethods({ onEnter: stub })
      $input.trigger('keyup.enter')

      expect(wrapper.vm.onEnter).toBeCalled()
    })

    it('sets the input value to the title of the currently selected item', () => {
      const $input = wrapper.find('input')
      wrapper.setData({ arrowPosition: 1 })
      $input.trigger('keyup.enter')

      expect(wrapper.vm.inputValue).toBe(items[1].title)
    })
  })

  describe('escape key', () => {
    it('calls onEscape', () => {
      const stub = jest.fn()
      const $input = wrapper.find('input')

      wrapper.setMethods({ onEscape: stub })
      $input.trigger('keyup.esc')

      expect(wrapper.vm.onEscape).toBeCalled()
    })

    it('clears the input data', () => {
      wrapper.setData({ inputValue: 'test' })
      wrapper.vm.onEscape()

      expect(wrapper.vm.inputValue).toBe('')
    })
  })
})
