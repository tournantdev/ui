# vue-a11y-combobox

## Styles

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

In [supporting browsers](https://caniuse.com/#search=custom%20prop 'Support table for CSS Custom Properties') you can adapt spacing and color of the component by accessing the following Custom Properties:

| Property              | Default             |
| --------------------- | ------------------- |
| --v-a11y-cb-space     | 0.5rem              |
| --v-a11y-cb-clr-light | rgb(206, 206, 206)  |
| --v-a11y-cb-clr-dark  | darkblue            |
| --v-a11y-cb-z-index   | --v-a11y-cb-z-index |

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```
