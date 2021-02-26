import styled from 'styled-components';

export const Button = styled.button`
  outline: 0;
  border: none;
  display: inline-block;
  width: ${({ block }) => block ? '100%' : 'auto' };
  padding: 0px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  opacity: 0.85;
  transform: scale(0);
  animation: ripple 1s;

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
