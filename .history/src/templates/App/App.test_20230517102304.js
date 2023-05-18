import { render } from '@testing-library/react';
import App from '../../components/App';
import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  renderTheme(<App />);
});
