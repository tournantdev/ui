## vue-a11y-combobox

A Vue component that implements the [WAI-ARIA authoring practices for a Combobox](https://www.w3.org/TR/wai-aria-practices-1.1/#combobox).

### ℹ️ Preface

I am no regular screenreader user. I followed the authoring practices to the best of my understanding. If something seems off, please open an [issue](https://github.com/ovlb/vue-a11y-combobox/issues/new 'New issue form of this project').

The current implementation only covers the _List autocomplete with manual selection_ part of the authoring practices.

### ✉️ API

#### 📥 Props

- `items`: An array of items to be displayed. The items of the array _must_ be objects that have a `title` and `id` property. If an empty array is passed, the message set in the `noResultsMessage` prop is shown. Defaults to an empty array.
- `inputLabel`: The label text of the input. Required.
- `isStyled`: Whether or not default styles should be applied. Defaults to false. See section [Styles](#styles) below.
- `noResultsMessage`: Text that should be shown if no results can be passed. Required.

#### 📤 Emitted events

- `input`: The component emits an input event if the value of the textbox changes. Please note that this is not debounced or throttled.
- `foundResult`: `keyup.enter` or `click` on an item emit the ID of the result.

### 🖍 Styles

The combobox exposes the following CSS classes for its parts:

| Classname                    | Element      |
| ---------------------------- | ------------ |
| v-a11y-combobox              | Root         |
| v-a11y-combobox\_\_input     | Text field   |
| v-a11y-combobox\_\_list      | List element |
| v-a11y-combobox\_\_list-item | List items   |

By default no styles will be attached to these classes.

Setting the `isStyled` prop to `true` will enable some default styles. Those are scoped by adding the `--is-styled` modifier to the respective element.
These styles add some little helpers (e.g. limiting the width, removing list styles, add `position: absolute` to the list) and some minor styling.

You can adapt spacing and color of the component by accessing the following Custom Properties ([supporting browsers](https://caniuse.com/#search=custom%20prop 'Support table for CSS Custom Properties')):

| Property              | Default            |
| --------------------- | ------------------ |
| --v-a11y-cb-space     | 0.5rem             |
| --v-a11y-cb-clr-light | rgb(206, 206, 206) |
| --v-a11y-cb-clr-dark  | darkblue           |
| --v-a11y-cb-z-index   | 10                 |

### 🙋 Feedback & Contributions

Contributions are always welcome.

If you found a bug or want to request a feature, please open an [issue](https://github.com/ovlb/vue-a11y-combobox/issues/new 'New issue form of this project').

If you wrote an enhancement or fixed a bug, open a Pull Request. Please follow the _Fork & Pull Request_ workflow, as [explained here](https://gist.github.com/Chaser324/ce0505fbed06b947d962 'GitHub Standard Fork & Pull Request Workflow by Chaser134').

Pull Requests _should_ contain unit tests. However, if you are not sure how to write these tests, please do not hesitate to open a request. We can then figure out how to add necessary tests.

Thanks. 💞

### ⚙️ Hack away

If you want to work with the code you can clone this repository and get started with these commands.

#### Install dependencies

```js
yarn install // npm run install
```

#### Compiles and hot-reloads for development

```
yarn run serve
```

#### Compiles and minifies for production

```
yarn run build:bundle
```

This builds only the component. `yarn run build` builds the file in the demo folder.

#### Lints and fixes files

```
yarn run lint
```

#### Run your unit tests

```
yarn run test:unit
```

`yarn run test:unit --watch` will keep a server running that tests your changes as you save.

### 📝 License

This project is licensed under the [MIT license](LICENSE).

### 🤓 Author

Oscar Braunert | [@ovlb](https://github.com/ovlb 'GitHub profile of Oscar') | [www.ovl.design](www.ovl.design 'Homepage of Oscar Braunert')
