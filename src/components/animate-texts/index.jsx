import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AnimateText = ({ children, transition: { from, to }, delay, className }) => {
  
  const [ count, setCount ] = useState(-1);

  useEffect(() => {
    let index = 0;
    let timer = setInterval(() => {
      let increment = (children[index] === " ") ? 2 : 1;
      setCount(count => count + increment);
      index++;
      if (index === children.length) {
        clearInterval(timer);
        timer = null;
      }
    }, delay);
  }, [delay, children]);

  useEffect(() => {
    setCount(-1);
  }, [children]);

  return (
    <>
      {
        [...children].map((child, idx) => (
          <span key={ idx }
            className={ className }
            style={ (idx > count) ? from : to }
          >
            { (child === ' ') ? '\u00A0' : child }
          </span>
        ))
      }
    </>
  );
}

AnimateText.defaultProps = {
  delay: 0,
  transition: {}
};

AnimateText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  transition: PropTypes.exact({
    from: PropTypes.object,
    to: PropTypes.object
  })
};

export default AnimateText;
