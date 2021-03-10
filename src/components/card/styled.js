import styled from 'styled-components';

export const CardInfo = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: var(--overlay);
  transition: top 0.4s var(--tf-1);
`;

export const Title = styled.h2`
  font-family: var(--other);
  margin: 0 0 10px;
`;

export const Desc = styled.p`
  margin: 0;
  font-family: var(--body);
  font-size: 1rem;
  text-align: center;
  line-height: 160%;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  width: 100%;
  opacity: 0;
  transition: opacity 0.4s var(--tf-1);
`;

export const Link = styled.a`
  width: auto;
  border-radius: 4px;
  font-size: 1rem;
  border: 2px solid var(--on-overlay);
  padding: 10px 15px;
  font-family: var(--code);
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    color: var(--primary);
    border-color: var(--primary);
  }
`;

export const CardWraper = styled.div`
  position: relative;
  background: url(${({image}) => image});
  background-size: 100% 100%;
  min-width: 280px;
  width: 100%;
  height: auto;
  min-height: 300px;
  margin: 0 auto;
  overflow: hidden;

  &:hover ${CardInfo} {
    top: 25%;
  }

  &:hover ${LinkBox} {
    opacity: 1;
  }
`;
