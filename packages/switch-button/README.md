# @tournant/switch-button

## Installation

You can install the component using NPM or Yarn.

```
npm install @tournant/switch-button --save
```

If you use Yarn:

```
yarn add @tournant/switch-button
```

Once the component is installed you need to import it wherever you want to use it.

```js
import TournantSwitchButton from '@tournant/switch-button'
```

Don’t forget to add it to the registered components (been there, done that):

```js
components: {
  TournantSwitchButton,
  // ... all the other amazing components
}
```

## Usage

Use this switch button, or toggle button as they are sometimes called, to implement a setting where you need literally an on-off switch (think: dark mode). [Read here more about the decision to not implement it with a checkbox input.](https://inclusive-components.design/toggle-button/#thisdoesntquitefeelright)

### Props

Use the `value` prop to set the switch button's state:

```html
<tournant-switch-button value="true">Tournant awesomeness</tournant-switch-button>
```

To use `<tournant-switch-button>` as a controlled component, use the `v-model` attribute to bind it:

 ```html
 <tournant-switch-button v-model="pidgeon">Notify me by carrier pidgeon</tournant-switch-button>
 ```

To supply a both visual and programmatically determined label for your switch button instance use the default slot like this:

```html
<tournant-switch-button>Dark mode</tournant-switch-button>
```

Other visually perceivable texts are available: the `on-label` prop (default value: "On", type String) labels the "on" state, whereas – surprisingly – the `off-label` prop (default value: "Off", type String) labels the "off" state:

```html
<tournant-switch-button onLabel="An" offLabel="Aus">Kontrastmodus</tournant-switch-button>
```

### Styles

The component exposes the following CSS classes for its parts:

| Classname                       | Element                                      |
| ------------------------------- | -------------------------------------------- |
| t-ui-switch-button              | Root                                         |
| t-ui-switch-button\_\_button    | The button itself                            |
| t-ui-switch-button\_\_label     | The visual label                             |
| t-ui-switch-button\_\text       | Generic container for the visual state label |
| t-ui-switch-button\_\text--on   | Visual state label for "on" state            |
| t-ui-switch-button\_\text-off   | Visual state label for "off" state           |

## Bugs & Enhancements

If you found a bug, please create a [bug ticket](https://github.com/tournantdev/ui/issues/new?assignees=&labels=component:switch-button&template=bug_report.md&title=).

For enhancements please refer to the [contributing guidelines](https://github.com/tournantdev/ui/blob/master/CONTRIBUTING.md).
