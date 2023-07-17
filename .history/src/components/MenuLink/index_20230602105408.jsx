import * as Styled from './styles'
import P from 'prop-types'

export const MenuLink = ({ children, link, newTab = false }) => {
  
  
  return (
    <Styled.Container href={link}>
      {children}
    </Styled.Container>
  )
}

MenuLink.propTypes = {
  children: P.node.isRequired,
}