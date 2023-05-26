import App from '../../templates/App';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { screen } from '@testing-library/react';

test('renders learn react link', () => {
 renderTheme(<App />)
});
