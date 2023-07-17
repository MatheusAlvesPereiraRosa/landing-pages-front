import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import {NavLinks} from '.'

import mock from './mock'

describe('<MenuLink />', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={mock}/>);
    expect(screen.getAllByRole('link')).tohaveLength(mock.length);
  });

});