import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  background: transparent;
  width: 50px;
  height: 50px;
  animation: ${rotate} 0.6s linear infinite;
  border-radius: 50%;
  border: 8px solid var(--light-gray);
  border-top: 8px solid var(--primary-1);
`;
