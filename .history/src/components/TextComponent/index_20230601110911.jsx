import * as Styled from 'styled-components'
import P from 'prop-types'

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  )
}

TextComponent.propTypes = {
  children: P.node.isRequired,
}