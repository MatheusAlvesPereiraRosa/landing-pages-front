import { render } from '@testing-library/react';
import App from '../../components/App';
import theme from "../../styles/theme"
import { ThemeProvider } from 'styled-components';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}

test('renders learn react link', () => {
  render(<App />);
});
