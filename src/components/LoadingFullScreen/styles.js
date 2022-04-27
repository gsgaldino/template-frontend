import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--absolute-white);
    position: absolute;
    top: 0;
    left: 0;
    opacity: .4;
  } 
`;
