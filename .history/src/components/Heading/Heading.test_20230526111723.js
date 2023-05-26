import { screen } from "@testing-library/react"
import { Heading } from "."
import { renderTheme } from "../../styles/render-theme"
import { theme } from "../../styles/theme"

describe('<Heading />', () => {
  it('should render with default values', () => {
    const {debug} = renderTheme(<Heading>Texto</Heading>)
    
    const heading = screen.getByRole('heading', { name: 'texto'})
  
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
    })
  })
})