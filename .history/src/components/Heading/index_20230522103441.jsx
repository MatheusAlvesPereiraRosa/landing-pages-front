import * as Styled from "./styles";
import P from 'prop-types';

export const Heading = ({ children, colorDark = true }) => {
  return <Styled.Title colorDark={colorDark} as='div'>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
};