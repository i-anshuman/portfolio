import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Overlay = ({children, className}) => {
  return (
    <Wrapper className={className}>
      { children }
    </Wrapper>
  );
};

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

Overlay.defaultProps = {
  className: ""
};

export default Overlay;
