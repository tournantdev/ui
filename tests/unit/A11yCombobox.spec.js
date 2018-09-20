import { shallowMount } from '@vue/test-utils'
import A11yCombobox from '@/components/combobox/A11yCombobox.vue'

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
      }
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
    wrapper.setData({ arrowPosition: 1 })
    const $input = wrapper.find('input')
    const inputAttr = $input.attributes()

    expect(inputAttr['aria-activedescendant']).toBe(`${descendantIdBase}1`)
  })

  // it('changes the input value if the user navigates the list with the keyboard', () => {
  //   // const $input = wrapper.find('input')
  //   wrapper.trigger('keyup.down')

  //   console.log(wrapper.vm.$data.inputValue)
  //   expect(wrapper.vm.$data.inputValue).toBe(items[0].title)
  // })
})
