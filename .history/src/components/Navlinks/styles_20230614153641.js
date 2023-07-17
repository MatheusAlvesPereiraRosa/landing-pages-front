import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.lteMedium} {
      flex-flox: column nowrap;
      align-content: center;
    }
  `}
`;
