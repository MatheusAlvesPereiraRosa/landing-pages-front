import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';

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
  },
  decorators: [
    (Story) => {
      <ThemeProvider theme={}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    }
  ]
};

export default preview;
