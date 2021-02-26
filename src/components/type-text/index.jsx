import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cursor = styled.span`
  position: absolute;
  display: inline-block;
  width: 2px;
  height: 100%;
  margin: 0px 2px;
  background-color: #fff;
  animation: ${({blink}) => blink && 'blink 1s cubic-bezier(0.6, 1.4, 0.4, 1.4) 0s infinite forwards'};

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const TypeText = ({ children, delay, wait, className, cursorStyle, hidden }) => {
  const [ count, setCount ] = useState(-1);
  const [ mount, toggleMount ] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      toggleMount(true);
    }, wait);
    return () => clearTimeout(timer);
  }, [wait]);

  useEffect(() => {
    if (mount) {
      let index = 0;
      let timer = setInterval(() => {
        let increment = 1;
        setCount(count => count + increment);
        index++;
        if (index === children.length) {
          clearInterval(timer);
          timer = null;
        }
      }, delay);
    }
  }, [delay, children, mount]);

  return (
    <>
      {
        [...children].map((letter, idx) => {
          if (idx <= count) {
            return (
              <span key={ idx } className={ className }>
                { (letter === " ") ? '\u00A0' : letter }
              </span>
            )
          }
          return null;
        })
      }
      {
        mount && 
        <Cursor style={ cursorStyle }
          blink={(count === children.length - 1)}
        />
      }
      { (hidden && !(count === children.length - 1)) && <span>&nbsp;</span> }
    </>
  );
}

TypeText.propTypes = {
  wait: PropTypes.number,
  delay: PropTypes.number,
  hidden: PropTypes.bool,
  className: PropTypes.string,
  cursorStyle: PropTypes.object
};

TypeText.defaultProps = {
  wait: 0,
  delay: 0,
  hidden: false,
  cursorStyle: {}
};

export default TypeText;
