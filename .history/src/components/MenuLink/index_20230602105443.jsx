import * as Styled from './styles'
import P from 'prop-types'

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self'
  
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  )
}

MenuLink.propTypes = {
  children: P.node.isRequired,
}