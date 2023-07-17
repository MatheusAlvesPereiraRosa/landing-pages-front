import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme"
import { MenuLink } from ".";

describe('<MenuLink />', () => {
  it('should render a text', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>)
  
    expect(screen.getByRole('link', {name: 'Children'})).toHaveAttribute(
      'target',
      '_self',
    )
  })

  it('should open in a new tab', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>)
  
    expect(screen.getByRole('link', {name: 'Children'})).toHaveAttribute(
      'target',
      '_self',
    )
  })
})