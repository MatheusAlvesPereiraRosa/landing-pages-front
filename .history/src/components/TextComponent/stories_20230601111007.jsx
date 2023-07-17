import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<TextComponent />', () => {
  it('should render', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    expect(screen.getByRole('heading')).toBeinTheDocument();
  });
});