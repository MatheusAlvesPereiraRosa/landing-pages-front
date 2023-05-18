import App from '../../templates/App';
import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<App />);
  debug()
});
