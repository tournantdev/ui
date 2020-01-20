# @tournant/tabs

## Installation

No rocket science here. Although rockets are cool, to be honest. 🚀 You can install the component using NPM or Yarn.

```
npm install @tournant/tabs --save
```

If you use Yarn:

```
yarn add @tournant/tabs
```

Once the component is installed you need to import it wherever you want to use it.

```js
import {  TournantTabsWidget, TournantTab, TournantTabpanel  } from '@tournant/tabs'
```

Don’t forget to add it to the registered components (been there, done that):

```js
components: {
   TournantTabsWidget, 
   TournantTab,
   TournantTabpanel
  // ... all the other amazing components
}
```

## Usage

At first, use the wrapper  called `TournantTabsWidget`. Inside it establish two slot areas:
- one named "tabs"
- one named "panels".

Inside them, place the triggers inside tabs, and the panel content inside panels, like this:

```
<tournant-tabs-widget initial="foo">
    <template slot="tabs">
        <tournant-tab name="foo">Item 1</tournant-tab>
        <tournant-tab name="bar">Item 2</tournant-tab>
        <tournant-tab name="baz">Item 3</tournant-tab>
    </template>
    <template slot="panels">
        <tournant-tabpanel name="foo">Panel 1</tournant-tabpanel>
        <tournant-tabpanel name="bar">Panel 2</tournant-tabpanel>
        <tournant-tabpanel name="baz">Panel 3</tournant-tabpanel>
    </template>
</tournant-tabs-widget>
```
Finally, decide on the initial tab. Pass the tab/panel name into `<TournantTabsWidget>`'s initial prop.

## Bugs & Enhancements

Note that this component follows the [WAI ARIA tabpanel Authoring Practice](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel).

If you found a bug, please create a [bug ticket](https://github.com/tournantdev/ui/issues/new?assignees=&labels=component:tabs&template=bug_report.md&title=).

For enhancements please refer to the [contributing guidelines](https://github.com/tournantdev/ui/blob/master/CONTRIBUTING.md).
