# @tournant/breadcrumb

A trail of links to let users find their place within a website.

## Installation

No rocket science here. Although rockets are cool, to be honest. 🚀 You can install the component using NPM or Yarn.

```
npm install @tournant/breadcrumb --save
```

If you use Yarn:

```
yarn add @tournant/breadcrumb
```

Once the component is installed you need to import it wherever you want to use it.

```js
import TournantBreadcrumb from '@tournant/breadcrumb'
```

Don’t forget to add it to the registered components (been there, done that):

```js
components: {
  TournantBreadcrumb,
  // ... all the other amazing components
}
```

## Usage

The breadcrumb renders an ordered list of links. The last item in the list is marked with `aria-current`.

### Props

- `links`: Array. Required. The links in the path you want to render. Consisting of items which are structured as follow:
  - `item`: Object. Needs to have the properties `to` and `text`. If used with Nuxt or @vue/router `exact` can also be set.
- `labelText`: String. Default: «Breadcrumb». A breadcrumb navigation _has_ to have an `aria-label`, you can change it with this prop.

### Basic Example

```html
<!-- Input -->
<tournant-breadcrumb
	:links="[
    { to: '/', text: 'Homepage' },
    { to: '/archive', text: 'Archive' },
    { to: '/archive/post', text: 'Post' }
  ]"
/>

<!-- Output -->
<nav aria-label="Breadcrumb" class="t-ui-breadcrumb">
	<ol class="t-ui-breadcrumb__list">
		<li class="t-ui-breadcrumb__item"><a href="/">Homepage</a></li>
		<li class="t-ui-breadcrumb__item"><a href="/archive">Archive</a></li>
		<li class="t-ui-breadcrumb__item">
			<a href="/archive/post" aria-current="Page">Post</a>
		</li>
	</ol>
</nav>
```

#### aria-current

You can omit `to` for the last item. In which case `aria-current` will not be set.

### Framework Detection

By default, all links are rendered as simple `a` tags. However, if you use Nuxt or @vue/router this is automatically detected and the links are rendered as `nuxt-link` or `router-link` respectively.

Under the hood it makes use of @tournant/dynamic-anchor.

### CSS

| Classname               | Element                                   |
| ----------------------- | ----------------------------------------- |
| t-ui-breadcrumb         | Root                                      |
| t-ui-breadcrumb\_\_list | The `ol` containing list items with links |
| t-ui-breadcrumb\_\_item | `li` containing a link                    |
| t-ui-breadcrumb\_\_link | `a` to the actual item                    |

### Events

If a user clicks on a link in the breadcrumb it emits a custom event named `itemClick`. The payload is the `index` of the clicked item.

## Bugs & Enhancements

If you found a bug, please create a [bug ticket](https://github.com/tournantdev/ui/issues/new?assignees=&labels=component:breadcrumb&template=bug_report.md&title=).

For enhancements please refer to the [contributing guidelines](https://github.com/tournantdev/ui/blob/master/CONTRIBUTING.md).
