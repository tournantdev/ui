# @tournant/alert

Notification messages that can be picked up by screenreaders. Implements the [status role](https://www.w3.org/TR/wai-aria-1.1/#status) by default. But can also be used an [alert widget](https://www.w3.org/TR/wai-aria-1.1/#alert).

## Installation

We are following standard package procedures. You can install the component using NPM or Yarn.

```
npm install @tournant/alert --save
```

If you use Yarn:

```
yarn add @tournant/alert
```

Once the component is installed you need to import it wherever you want to use it.

```js
import TournantNotification from '@tournant/notification'
```

Don’t forget to add it to the registered components (been there, done that):

```js
components: {
  TournantNotification,
  // ... all the other amazing components
}
```

## Usage

The default usage of this component is the implementation of the `status` role. This role sets `aria-live` to `polite`, meaning that the text content of the component will be read after the screenreader has finished its current output.

If you need to announce something important, change the prop `type` to be `assertive`. This will render the component with a role of `alert` and interrupt a screen reader in its current output.

### Usage as a status message

A status message is a message that will be announced after the current output. It is useful if, say, a new page has been loaded. This is the default behaviour.

```html
<!-- Input !-->
<tournant-notification message="Page 4 has been loaded" />

<!-- Output -->
<div role="status" class="t-ui-alert is-info">Page 4 has been loaded</div>
>
```

### Usage as an alert message

An alert will be announced immdiately. It is useful if, say, a critical error has occured.

```html
<!-- Input !-->
<tournant-notification
	type="assertive"
	message="There has been an error parsing your data."
/>

<!-- Output -->
<div role="alert" state="error" class="t-ui-alert is-info">
	There has been an error parsing your data
</div>
>
```

### Props

The following props can be used to control the component:

- `message`: _Required_. A string that shoudl be added to page and read out by screen readers.
- `state`: Default: `info`. A state level, with which you can control visual representation. See section [#css](CSS) below.
- `type`: Default: `polite`. Controls the announcement by a screen reader. Must be either `assertive` or `polite`.
- `hideAfterSeconds`: Default: `5`. The time which should pass before the message is hidden.

### Timeout

Alerts are only status messages. As such, they do not require user interaction. The spec is pretty clear:

> Neither authors nor user agents are required to set or manage focus to them in order for them to be processed. Since alerts are not required to receive focus, content authors **SHOULD NOT** require users to close an alert.

That’s why it is important to clear messages after a while. The while depends on the length of your messages. We use a default value of five seconds. But you are free to change to this with the `hideAfterSeconds` prop.

Note: It is named _hideAfterSeconds_. We multiply the value by 1,000 in the component. Do not pass miliseconds as a value.

Once the timeout elapses, the component sets `aria-hidden` to `true` and `display: none`. We do this to make it easier to comply with the ARIA requirements. You should, nonetheless, take care of discarding old messages in your app yourself.

### TalkBack Usage Notes

From our testing it seems as if TalkBack on Android reads alert content twice.

### CSS

The component exposes the `t-ui-alert` class by default. Additionally it will set the current state prepended by «is» as its class. Some examples:

```html
<!-- Input !-->
<tournant-notification state="error" type="assertive" message="404 Not Found" />
<!-- Output !-->
<div role="alert" class="t-ui-alert is-error">404 Not Found</div>

<!-- Input !-->
<tournant-notification state="success" message="200 OK" />
<!-- Output !-->
<div role="status" class="t-ui-alert is-success">200 OK</div>
```

States can be whatever you want:

```html
<!-- Input !-->
<tournant-notification state="im-a-teapot" message="418 I’m a Teapot" />
<!-- Output !-->
<div role="status" class="t-ui-alert is-im-a-teapot">418 I’m a Teapot</div>
```

These can act as a helper to style the component matching the state.

#### aria-hidden

If the timeout elapsed and the message has not been removed from the outside, `aria-hidden` will be set to true. To keep the UI in sync, `display: none` is added to the root element.

## Bugs & Enhancements

If you found a bug, please create a [bug ticket](https://github.com/tournantdev/ui/issues/new?assignees=&labels=component:alert&template=bug_report.md&title=).

For enhancements please refer to the [contributing guidelines](https://github.com/tournantdev/ui/blob/master/CONTRIBUTING.md).
