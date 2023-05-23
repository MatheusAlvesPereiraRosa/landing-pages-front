import styled, { css } from 'styled-components'

const titleSize = {
  small: () => css``,
  small: () => css``,
  small: () => css``,
}

export const Title = styled.h1`
  ${({theme, colorDark}) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white}
  `}
`