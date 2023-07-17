import { MenuLink } from '../MenuLink'
import * as Styled from './styles'
import P from 'prop-types'

export const Navlinks = ({ children }) => {
  return (
    <Styled.Container>
      {links.map((link) => {
        <MenuLink></MenuLink>
      })}
    </Styled.Container>
  )
}

Navlinks.propTypes = {
  children: P.node.isRequired,
}