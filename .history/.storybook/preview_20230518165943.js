import { Story } from '@storybook/blocks';
import { ThemeProvider } from 'styled-components';

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
  decorators: {
    (Story) => {
      <ThemeProvider >
        
      </ThemeProvider>
    }
  }
};

export default preview;
