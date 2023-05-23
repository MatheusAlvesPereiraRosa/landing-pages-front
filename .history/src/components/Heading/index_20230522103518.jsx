import * as Styled from "./styles";
import P from 'prop-types';

export const Heading = ({ children, colorDark = true, as = 'h1' }) => {
  return <Styled.Title colorDark={colorDark} as={as}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
};