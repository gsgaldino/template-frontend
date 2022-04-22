import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:last-child {
    display: flex;
    gap: var(--spacement-x-large);
  }
`;

export const Container = styled.div`
  padding: var(--spacement-default) 0px;
`;
