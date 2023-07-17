import { MenuLink } from '../MenuLink'
import * as Styled from './styles'
import P from 'prop-types'

export const Navlinks = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link) => {
        <MenuLink {...link}/>
      })}
    </Styled.Container>
  )
}

Navlinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    })
  ).isRequired
}