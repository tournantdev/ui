# @tournant/ui

A Vue component that implements the [WAI-ARIA authoring practices for a Combobox](https://www.w3.org/TR/wai-aria-practices-1.1/#combobox).

## Preface

I am no regular screenreader user. I followed the authoring practices to the best of my understanding. If something seems off, please open an [issue](https://github.com/tournantdev/ui/issues/new 'New issue form of this project').

The current implementation only covers the _List autocomplete with manual selection_ part of the authoring practices.

## Installation

No rocket science here. Although rockets are cool, tbh. 🚀 Just install the component from npm.

```
npm install @tournant/ui --save-dev
```

If you use Yarn:

```
yarn add -D @tournant/ui
```

Once the component is installed you need to import wherever you want to use it.

```js
import TournantCombobox from '@tournant/ui'
```

Don’t forget to add it to the registered components (been there, done that):

```js
components: {
  TournantCombobox,
  // ... all the other amazing components
}
```

## Demo

You can find a live demo on [@tournant/ui.code.ovl.design](https://@tournant/ui.code.ovl.design/).

## API

## Props

- `items`: An array of items to be displayed. The items of the array _must_ be objects that have a `title` and `id` property. If an empty array is passed, the message set in the `noResultsMessage` prop is shown. Defaults to an empty array.
- `inputLabel`: The label text of the input. Required.
- `isStyled`: Whether or not default styles should be applied. Defaults to false. See section [Styles](#styles) below.
- `noResultsMessage`: Text that should be shown if no results can be passed. Required.

## Emitted events

- `input`: The component emits an input event if the value of the textbox changes. Please note that this is not debounced or throttled.
- `foundResult`: `keyup.enter` or `click` on an item emit the ID of the result.

## Styles

The combobox exposes the following CSS classes for its parts:

| Classname                  | Element      |
| -------------------------- | ------------ |
| t-ui-combobox              | Root         |
| t-ui-combobox\_\_input     | Text field   |
| t-ui-combobox\_\_list      | List element |
| t-ui-combobox\_\_list-item | List items   |

By default no styles will be attached to these classes.

Setting the `isStyled` prop to `true` will enable some default styles. Those are scoped by adding the `--is-styled` modifier to the respective element.
These styles add some little helpers (e.g. limiting the width, removing list styles, add `position: absolute` to the list) and some minor styling.

You can adapt spacing and color of the component by accessing the following Custom Properties ([supporting browsers](https://caniuse.com/#search=custom%20prop 'Support table for CSS Custom Properties')):

| Property            | Default            |
| ------------------- | ------------------ |
| --t-ui-cb-space     | 0.5rem             |
| --t-ui-cb-clr-light | rgb(206, 206, 206) |
| --t-ui-cb-clr-dark  | darkblue           |
| --t-ui-cb-z-index   | 10                 |

## Bugs & Enhancements

If you found a bug, please create a [bug ticket](https://github.com/tournantdev/ui/issues/new?assignees=&labels=component:combobox&template=bug_report.md&title=).

For enhancements please refer to the [contributing guidelines](https://github.com/tournantdev/ui/blob/master/CONTRIBUTING.md).

## License

This project is licensed under the [MIT license](LICENSE).
