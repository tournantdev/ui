# Contributing

## Bugs

If you found a bug in one of our components, please open a [new bug issue](https://github.com/tournantdev/ui/issues/new?assignees=&labels=&template=bug_report.md&title=).

Providing a reduced test case, e.g. in a [Codesandbox](https://codesandbox.io/), is much appreciated.

## Features & New Components

You want to contribute a component or add a missing feature? That’s amazing. Before developing, though, we ask you to start with a [feature request issue](https://github.com/tournantdev/ui/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=).

Why’s that? Tournant UI does not try to provide _all_ UI patterns. Some may be out of the scope of this repo. By having a discussion upfront, we aim for a more targeted and productive development process.

After we discussed your proposal you can go full steam ahead. For developing please follow the _Fork & Pull Request_ workflow, as [explained here](https://gist.github.com/Chaser324/ce0505fbed06b947d962 'GitHub Standard Fork & Pull Request Workflow by Chaser134').

Pull Requests _should_ contain unit tests. However, if you are not sure how to write these tests, please do not hesitate to open a request. We can figure out how to add necessary tests together.

Pull Requests _must_ contain readme updates. Or a a readme for a new component that explains how to use it. We will not merge PRs that do not contain documentation.

To create files for a new component use the `yarn run create` command. This will run the [@tournant/communard](https://github.com/tournantdev/communard) CLI tool. The [corresponding readme](https://github.com/tournantdev/communard/blob/master/README.md) contains usage information.

Please always use this tool for new components, as it will create all config files in a standardised manner.

### Watch Mode

Some components depend on each other. To keep them up-to-date when developing in sync run `yarn watch` in the respective package folders.

It is, unfortunately, currently not possible to use Lerna for this. Thus, every package’s watch mode need to run in separate terminal session.

### Storybook

We use [Storybook](https://storybook.js.org/) to quickly prototype new components. If you’ve never worked with it before, we recommend the [Intro to Storybook](https://www.learnstorybook.com/intro-to-storybook) guide.

Stories for single components are located in the respective `tests` folder. `@tournant/communard` will create this file for you.

To start Storybook run `yarn storybook`. This will open an instance with hot-reloading and so forth on port `9001`.

We use [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs) for interactive stories.

## Website

There is none just yet. Available components are listed in [ui/index.html](ui/index.html), which is deployed to Netlify. A better site is coming soon.

That’s it. If there are any open questions, please do not hesitate to contact us at [team@tournant.dev](mailto:team@tournant.dev)

Thanks. 💞
