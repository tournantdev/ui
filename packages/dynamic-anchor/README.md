# @tournant/dynamic-anchor

A wrapper around `nuxt-link` or `router-link`, which falls back to a native `a` tag.

This is probably only useful if you don’t have control over the Vue environment.

## Installation

No rocket science here. Although rockets are cool, to be honest. 🚀 You can install the component using NPM or Yarn.

```
npm install @tournant/dynamic-anchor --save
```

If you use Yarn:

```
yarn add @tournant/dynamic-anchor
```

Once the component is installed you need to import it wherever you want to use it.

```js
import TournantDynamicAnchor from '@tournant/dynamic-anchor'
```

Don’t forget to add it to the registered components (been there, done that):

```js
components: {
  TournantDynamicAnchor,
  // ... all the other amazing components
}
```

## Usage

Since our packages might be used in a lot of different circumstances, we needed an agnostic component that fares well under differing circumstances.

This component is a wrapper around Nuxt Link and Router Link. If Nuxt or @vue/router are detected it will pass the given link to `nuxt-link` or `router-link` respectively. If not, a HTML `a` element is rendered.

### Props

`@tournant/dynamic-anchor` takes a single prop: An object named `link`. A simple example will look like

```js
{ to: '/example-route', text: 'Example' }
```

Here’s a more detailed overview:

| Property             | Required | Type                         |
| -------------------- | -------- | ---------------------------- |
| to                   | true     | String OR Router Link Object |
| text                 | true     | String                       |
| useNativeLinkElement | false    | Boolean                      |

If `link.useNativeLinkElement` is set to `true` it will always use the `a` tag.

All other added props and attributes are bound to the component.

## Bugs & Enhancements

If you found a bug, please create a [bug ticket](https://github.com/tournantdev/ui/issues/new?assignees=&labels=component:dynamic-anchor&template=bug_report.md&title=).

For enhancements please refer to the [contributing guidelines](https://github.com/tournantdev/ui/blob/master/CONTRIBUTING.md).
