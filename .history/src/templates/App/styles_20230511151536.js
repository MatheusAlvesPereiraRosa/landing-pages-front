import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    background: ${props.background}
  `}
`;
