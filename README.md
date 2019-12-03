# Tournant UI

[![Greenkeeper badge](https://badges.greenkeeper.io/tournantdev/ui.svg)](https://greenkeeper.io/)

In the kitchen, the _tournant_ is the person moving around, helping out.

Tournant UI aims to be this. For User Interfaces. Tournant UI will not replace your complete UI or dictate how to you design your elements.

But if you need to integrate inclusive components in your site, Tournant UI will be there. Like a helping hand.

## Note

This is still in early development. Many components needed are missing. If you are able to contribute, please do!

## Components

This project aims to provide common user interface patterns. It revolves around the [WAI-ARIA design patterns and examples](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex) list. But it is not limited to it.

You can track our progress and development plans in the [Component Development project](https://github.com/tournantdev/ui/projects/2). Again, if you are able to contribute one of the components, please do so. If you need one of the components but don’t feel like you can build it on your own, open a [feature request issue](https://github.com/tournantdev/ui/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=).

## Acknowledgment

Tournant is heavily inspired by projects such as Reach UI, Inclusive Components and Accessible App.

## Feedback & Contributions

Contributions are always welcome.

We have written down detailed [contribution guidelines](CONTRIBUTING.md).

Please be aware that all contributions have to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Contributions of any kind which to not adhere to it will be removed. No exceptions will be made.

Thanks. 💞

## Development

If you want to improve the component, follow these steps.

Tournant UI uses [Lerna](https://lerna.js.org/). You will need to bootstrap the project folder:

```
yarn bootstrap
```

This will install all packages and hoist them to the project root folder.

### Create a Component

We maintain a CLI helper tool named [Communard](https://github.com/tournantdev/communard) to quickly scaffold the folder structure needed to develop a new component. It is integrated into the project. You can start it by running `yarn run create`.

To develop your components please use Storybook [as explained in the contribution documentation](CONTRIBUTING.md#storybook).

### Build packages

To build all packages run:

```
yarn build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Publish Packages

💁 _Note:_ You need to have access to the npm @tournant organisation to run this command.

Before you are able to use the integrated Lerna publishing flow the package needs to be on NPM already. We recommend [np](https://github.com/sindresorhus/np) for doing so.

To publish everything run:

```
yarn publish:packages
```

## Authorship

Tournant UI is maintained by Marcus and Oscar. But, in reality, this project wouldn’t be possible without the amazing community that has evolved around inclusive web development. Thanks, y’all.

Special thanks to Ryan Florence and the [Reach UI](https://github.com/reach/reach-ui) project, from which we blatantly copied lots of the architecutural decisions and the idea itself.

Marcus Herrmann | [@marcus-herrmann](https://github.com/marcus-herrmann) | [www.marcus.io](www.marcus.io)
Oscar Braunert | [@ovlb](https://github.com/ovlb) | [www.ovl.design](www.ovl.design)
