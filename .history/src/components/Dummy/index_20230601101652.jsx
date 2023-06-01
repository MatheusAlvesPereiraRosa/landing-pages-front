import * as Styled from 'styled-components'
import P from 'prop-types'

export const Dummy = ({ children }) => {
  return (
    <Styled.Container>
      <h1>Dummy</h1>
    </Styled.Container>
  )
}

Dummy.propTypes = {
  children:
}