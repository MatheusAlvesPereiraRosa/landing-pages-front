import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    background: {
      default: 'light',
      value: [
        {
          name: 'light',
          value: theme.colors.lightBg,
        },
        {
          name: 'light',
          value: theme.colors.lightBg,
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
};

export default preview;
