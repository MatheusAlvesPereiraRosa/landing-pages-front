import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export const Title = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.mainBg}
  `}
`