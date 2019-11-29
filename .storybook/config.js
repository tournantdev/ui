import { configure } from '@storybook/vue'

configure(require.context('../packages', true, /\.stories\.js$/), module)
