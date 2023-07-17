import * as Styled from './styles'
import P from 'prop-types'

export const Navlinks = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  )
}

Navlinks.propTypes = {
  children: P.node.isRequired,
}