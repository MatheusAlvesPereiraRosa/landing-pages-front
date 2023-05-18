import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import { ThemeProvider } from 'styled-components';

export const renderTheme = () => {
  return <ThemeProvider>{}</ThemeProvider>
}

test('renders learn react link', () => {
  render(<App />);
});
