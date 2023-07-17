import * as Styled from 'styled-components'
import P from 'prop-types'

export const MenuLink = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

MenuLink.propTypes = {
  children: P.node.isRequired,
}