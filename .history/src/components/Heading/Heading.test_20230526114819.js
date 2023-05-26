import { screen } from "@testing-library/react"
import { Heading } from "."
import { renderTheme } from "../../styles/render-theme"
import { theme } from "../../styles/theme"
import { ThemeProvider } from "styled-components"

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'Texto'})
  
    expect(heading).toHaveStyleRule('color', `${theme.colors.primaryColor}`)
    expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.xhuge}`)
    expect(heading).toHaveStyleRule('text-transform', 'none')
  })

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'Texto'})
  
    expect(heading).toHaveStyleRule('color', `${theme.colors.white}`)
  })

  it('should render correct heading sizes', () => {
    const {rerender} = renderTheme(<Heading size='small'>Texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'Texto'})
  
    expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.medium}`)
  
    rerender(
      <ThemeProvider theme={theme} >
        <Heading size="big">Texto</Heading>
      </ThemeProvider>
    )

    expect(screen.getByRole('heading', { name: 'Texto'})).toHaveStyleRule('font-size', `${theme.fonts.sizes.medium}`)
  })
})