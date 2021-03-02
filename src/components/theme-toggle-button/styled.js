import styled from 'styled-components';
import Button from '../button';

export const ToggleButton = styled(Button)`
  font-size: 2rem;
  color: var(--on-background);
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;

  & > i {
    transform-origin: center;
    margin: 9px;
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    transform: translateY(${({theme}) => theme === 'light' ? '0px' : '50px'});

    &:nth-of-type(2) {
      transform: translateY(${({theme}) => theme === 'dark' ? '-50px' : '0px'});
    }
  }
`;
