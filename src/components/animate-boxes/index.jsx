import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AnimateBox = ({ children, transition: { from, to }, delay, className }) => {

  const [ count, setCount ] = useState(-1);

  useEffect(() => {
    let index = 0;
    let timer = setInterval(() => {
      setCount(count => count + 1);
      index++;
      if ((!children.length) || index === children.length) {
        clearInterval(timer);
        timer = null;
      }
    }, delay);
  }, [ delay, children ]);

  if (Array.isArray(children)) {
    return (
      <>
        {
          [...children].map((child, idx) => (
            <div key={ idx }
              className={ className }
              style={ (count < idx) ? from : to }
            >
              { child }
            </div>
          ))
        }
      </>
    );
  }
  return (
    <div className={ className }
      style={ (count === -1) ? from : to }
    >
      { children }
    </div>
  );
}

AnimateBox.defaultProps = {
  delay: 0,
  transition: {}
};

AnimateBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  transition: PropTypes.exact({
    from: PropTypes.object,
    to: PropTypes.object
  })
};

export default AnimateBox;
