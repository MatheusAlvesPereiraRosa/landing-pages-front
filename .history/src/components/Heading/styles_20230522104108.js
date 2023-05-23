import styled, { css } from 'styled-components'

const titleSize = {
  small: (theme) => css``,
  medium: (theme) => css``,
  big: (theme) => css``,
}

export const Title = styled.h1`
  ${({theme, colorDark}) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white}
    ${titleSize[size]()};
  `}
`