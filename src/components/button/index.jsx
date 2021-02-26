import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Ripple } from './styled';

const RippleButton = ({ children, type, block, onClick, className, rippleStyle }) => {
  const [ coords, setCoords ] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [ ripple, setRipple ] = useState(false);

  const showRipple = e => {
    const target = e.currentTarget;
    const positions = target.getBoundingClientRect();
    const page = {
      x: e.pageX,
      y: e.pageY
    }
    const coords = {
      top: page.y - positions.y - (target.offsetWidth / 2),
      left: page.x - positions.x - (target.offsetWidth / 2),
      width: target.offsetWidth,
      height: target.offsetWidth
    };
    setCoords({ ...coords });
    setRipple(true);
  }

  useEffect(() => {
    if (ripple) {
      const timer = setTimeout(() => {
        setRipple(false);
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [ ripple ]);

  return (
    <Button type={ type }
      className={ className }
      block={ block }
      onClick={ e => {
        onClick();
        showRipple(e);
      }}
      disabled={ ripple }
    >
      { children }
      {
        ripple && 
        <Ripple
          style={{ ...coords, ...rippleStyle }}
        >
        </Ripple>
      }
    </Button>
  );
}

RippleButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  block: PropTypes.bool,
  rippleStyle: PropTypes.object,
  onClick: PropTypes.func
};

RippleButton.defaultProps = {
  type: "button",
  block: false,
  onClick: () => {},
  rippleStyle: {
    backgroundColor: '#fff'
  }
};

export default RippleButton;
