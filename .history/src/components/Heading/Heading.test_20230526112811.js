import { screen } from "@testing-library/react"
import { Heading } from "."
import { renderTheme } from "../../styles/render-theme"
import { theme } from "../../styles/theme"

describe('<Heading />', () => {
  it('should render with default values', () => {
    const {debug} = renderTheme(<Heading>Texto</Heading>)
    
    const heading = screen.getByRole('heading', { name: 'Texto'})
  
    expect(heading).toHaveStyleRule('color', `${theme.colors.primaryColor}`)
    expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.xhuge}`)
    expect(heading).toHaveStyleRule('text-transform', 'none')
  }),
  it('should render with default values', () => {
    const {debug} = renderTheme(<Heading>Texto</Heading>)
    
    const heading = screen.getByRole('heading', { name: 'Texto'})
  
    expect(heading).toHaveStyleRule('color', `${theme.colors.primaryColor}`)
    expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.xhuge}`)
    expect(heading).toHaveStyleRule('text-transform', 'none')
  }),
})