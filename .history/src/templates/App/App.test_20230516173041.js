import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import { ThemeProvider } from 'styled-components';

export const renderTheme = (children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

test('renders learn react link', () => {
  render(<App />);
});
