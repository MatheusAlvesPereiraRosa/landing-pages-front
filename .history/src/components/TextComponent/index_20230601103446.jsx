import * as Styled from 'styled-components'
import P from 'prop-types'

export const  = ({ children }) => {
  return (
    <Styled.Container>
      <h1></h1>
    </Styled.Container>
  )
}

.propTypes = {
  children: P.node.isRequired,
}