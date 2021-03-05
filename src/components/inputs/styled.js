import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  font-family: var(--body);
  font-size: 1.5rem;
`;

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 10px;
  transform-origin: center left;
  transition: all 0.4s var(--tf-1);
  color: var(--on-background);
  font-family: inherit;
  pointer-events: none;

  & > span {
    display: inline-block;
    transition: all 0.3s ease;
    &:first-child {
      text-transform: capitalize;
    }
  }
`;

export const HighLight = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
  }
  &::before {
    background-image: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  }
  &::after {
    left: 0;
    background: var(--on-background);
    transition: all 0.4s var(--tf-1);
  }
`;

export const Field = styled.input`
  width: 100%;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  padding: 10px;
  box-shadow: none;
  color: var(--on-background);
  transition: all 0.4s var(--tf-1);

  &:focus {
    color: var(--primary);
    & + ${Label} {
      color: var(--primary);
      transform: translateY(-30px) scale(0.7);
    }
    & ~ ${HighLight} {
      &::after {
        width: 0%;
        left: 50%;
      }
    }
  }
  &:not(:placeholder-shown) + ${ Label } {
    transform: translateY(-30px) scale(0.7);
  }
`;

export const Message = styled.small`
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 0.95rem;
  color: var(--error);
`;
