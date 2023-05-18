import App from '../../templates/App';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { screen } from '@testing-library/react';

test('renders learn react link', () => {
  const { debug } = renderTheme(<App />);
  const headingContainer = screen.getByRole('heading', { name: "Hello"}).parentElement

  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  })

});
