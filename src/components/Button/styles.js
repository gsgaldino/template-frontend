import styled, { css } from 'styled-components';

const ButtonGhostCss = css`
  &.ghost {
    border: 0;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: var(--body-default-font-size);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  ${ButtonGhostCss}
`;
