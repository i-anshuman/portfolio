import React from 'react';
import PropTypes from 'prop-types';
import AnimateText from '../animate-texts';

const Title = ({ children }) => {
  return (
    <AnimateText delay={100}
      transition={{
        from: {
          opacity: 0,
          transform: `translateX(500px) rotate(90deg)`
        },
        to: {
          opacity: 1,
          transform: `translateY(0px) rotate(0deg)`
        }
      }}
    >
      { children }
    </AnimateText>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
