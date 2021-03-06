import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HourGlass = styled.div`
  position: relative;
  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
  border-top: 5px solid #fbc02d;
  border-bottom: 5px solid #f9a825;
  animation: flip 10s ease-in-out infinite;
  
  @keyframes flip {
    0%, 45% {
      transform: rotate(0deg);
    }
    50%, 95% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Bulb = styled.div`
  position: relative;
  width: 90%;
  height: 50%;
  margin: 0 auto;
  background: #def;
  box-shadow: 0 0 10px 10px #bcd inset;
  border-radius: ${({bottom}) => bottom ? '50% 50% 0 0' : '0 0 50% 50%'};
  overflow: hidden;

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    top: 0;
    background-color: #fc6;
  }
  
  &:before {
    width: 100%;
    left: 0;
    border-radius: 50%;
    transform: translateY(${({bottom}) => bottom ? '100%' : '50%'});
    animation: ${({bottom}) => bottom ? 'bottom' : 'top'} 10s linear infinite;
  }

  &:after {
    width: 10%;
    left: 45%;
    transform: translateY(100%);
    animation: ${({bottom}) => bottom ? 'bottom-drip' : 'top-drip'} 10s linear infinite;
  }

  @keyframes bottom {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(50%);
    }
    51% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  
  @keyframes top {
    0% {
      transform: translateY(50%);
    }
    50% {
      transform: translateY(100%);
    }
    51% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(-50%);
    }
  }
  
  @keyframes bottom-drip {
    0% {
      left: 45%;
      transform: translateY(-100%);
      width: 10%;
    }
    5% {
      transform: translateY(0);
    }
    45%, 100% {
      left: 50%;
      transform: translateY(0);
      width: 0;
    }
  }
  
  @keyframes top-drip {
    0%, 50% {
      left: 45%;
      width: 10%;
      transform: translateY(100%);
    }
    55% {
      left: 45%;
      width: 10%;
      transform: translateY(0);
    }
    100% {
      left: 50%;
      width: 0;
      transform: translateY(0);
    }
  }
`;

const Text = styled.p`
  font-family: var(--body);
`;

const PageLoader = ({ text, width, height, className }) => {
  return (
    <Wrapper className={className}>
      <HourGlass width={width} height={height}>
        <Bulb />
        <Bulb bottom />
      </HourGlass>
      <Text>{text}</Text>
    </Wrapper>
  );
};

PageLoader.defaultProps = {
  text: 'LOADING',
  width: 50,
  height: 90,
  className: ""
};

PageLoader.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string
};

export default PageLoader;
