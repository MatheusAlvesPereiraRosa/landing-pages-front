import * as Styled from 'styled-components'
import P from 'prop-types'

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

TextComponent.propTypes = {
  children: P.node.isRequired,
}