# @tournant/dropdown

A flexible, accessible dropdown menu.

---

[![NPM version](https://img.shields.io/npm/v/@tournant/dropdown.svg?style=flat)](https://www.npmjs.com/package/@tournant/dropdown)
[![GitHub license](https://img.shields.io/github/license/ovlb/@tournant/dropdown.svg)](https://github.com/ovlb/@tournant/dropdown/blob/master/LICENSE)

## 💁‍ Read Before Use

This component implements a dropdown menu using the ARIA `menu` role. It’s a a dropdown menu.

«Fine,» you might think, «I need to implement a nested navigation and need a dropdown.» If so, this component is not the right choice. Technically speaking, a `menu` is no `navigation`. I highly encourage reading [Menu & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/) of Heydon Pickering’s [Inclusive Components blog](https://inclusive-components.design/) or Adrian Roselli’s post [Don’t Use ARIA Menu Roles for Site Nav](http://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html).

## Installation

You can install the component using NPM or Yarn.

```
npm install @tournant/dropdown --save
```

If you use Yarn:

```
yarn add @tournant/dropdown
```

Once the component is installed you need to import it wherever you want to use it.

```js
import TournantDropdown from '@tournant/dropdown'
```

Don’t forget to add it to the registered components (been there, done that):

```js
components: {
  TournantDropdown,
  // ... all the other amazing components
}
```

## API

This is just a quick overview. For an in-depth guide how to use the component check the section Usage below.

### Props

- `yPosition`: Default: `bottom`. Must be `top` or `bottom`. Controls vertical positioning.
- `xPosition`: Default: `left`. Must be `left` or `right`. Controls horizontal positioning.
- `ariaLabel`: Optional. Add the `aria-label` attribute on a button. Can be used if it not viable to put text inside of the button. For other options see the article [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/) from Sara Soueidan.

### Slots

- `button-text`: Text inside of the button. If you just add an icon, ensure to give the button an accessible name. Either via the `ariaLabel` prop or one of the other techniques explained by Sara Soueidan.
- `items`: Items of the menu. All elements in here must have a role of `menuitem` and a `tabindex="-1"`.

### Styles

The component exposes the following CSS classes for its parts:

| Classname               | Element                           |
| ----------------------- | --------------------------------- |
| t-ui-dropdown           | Root                              |
| t-ui-dropdown\_\_toggle | The button to open/close the menu |
| t-ui-dropdown\_\_menu   | `div` containing the menu buttons |

The component comes with some default styles, e.g. it is setting `position: absolute` on the menu container as well as `z-index: 10`.

#### Positioning

Depending on use the menu might have to appear in different places. This happens through the `yPosition` and `xPosition` props. Depending on the respective value, a modifier class is added. You can use these classes to apply more styling and adapt the positioning further.

The following table shows an overview of these:

| Position | Modifier Class |
| -------- | -------------- |
| left     | -is-left       |
| right    | -is-right      |
| bottom   | -is-bottom     |
| top      | -is-top        |

## Usage

### Labeling the Toggle Button

Text can be added inside of the menu using the `button-text` slot:

```html
<template v-slot:button-text>
	Options
</template>
```

If it isn’t possible to add a word inside of the button read the article [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/) from Sara Soueidan. In it she describes multiple options to ensure that Icon Buttons are accessible. If you opt for using `aria-label` you can use the `ariaLabel` prop to add it to the element.

💁‍ Once the component is mounted, it will check some values to determine if the button has accessible text. It will warn you in the browser console if it couldn’t detect any.

### Opening and Closing the Menu

The menu gets toggled between open and closed state by triggering a click event on the button. As it uses a `button` element, this can also happen via the <kbd>ENTER</kbd> or <kbd>SPACE</kbd> keys. Additionally, <kbd>↓</kbd> can be used.

To close the menu, the user can click outside of it, <kbd>Tab↹</kbd> away or use the <kbd>ESC</kbd> key. While the menu button is focussed <kbd>↑</kbd> will close the menu, too.

### Menu Items

Items inside of the menu can be added via the `items` slot.

```html
<template v-slot:items>
	<button tabindex="-1" role="menuitem">Rename</button>
	<button tabindex="-1" role="menuitem">Delete</button>
</template>
```

Make sure to add `role="menuitem"` and `tabindex="-1"` to the items you add. The `role` helps assistive technology to make sense of the items and override any native role the elements might have. Since keyboard navigation inside of the menu happens with <kbd>↓</kbd> and <kbd>↑</kbd> the items need to be taken out of the focus order.

#### Querying for Menu Items

Once the menu opens the component uses `querySelectorAll('[role=menuitem]:not([disabled])')` to construct an Array of all enabled items in the menu.
