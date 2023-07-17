import { MenuLink } from '../MenuLink'
import * as Styled from './styles'
import P from 'prop-types'

export const Navlinks = ({ link = [] }) => {
  return (
    <Styled.Container>
      {links.map((link) => {
        <MenuLink />
      })}
    </Styled.Container>
  )
}

Navlinks.propTypes = {
  children: P.node.isRequired,
}