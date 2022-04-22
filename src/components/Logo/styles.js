import styled from 'styled-components';

export const Logo = styled.div`
  background: var(--primary-1);
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: 'My logo';
    font-family: "Arial", sans-serif;
  }
`;
