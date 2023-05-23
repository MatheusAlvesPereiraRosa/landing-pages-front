import styled, { css } from 'styled-components'

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large}
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge}
  `,
}

export const Title = styled.h1`
  ${({theme, colorDark, size}) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white}
    ${titleSize[size](theme)};
  `}
`