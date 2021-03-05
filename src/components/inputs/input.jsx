import PropTypes from 'prop-types';
import AnimateText from '../animate-texts';
import { Wrapper, Field, Label, HighLight, Message } from './styled';

const Input = ({ type, label, placeholder, name, value, error, className, ...props}) => {
  return (
    <Wrapper className={className}>
      <Field
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      <Label>
        <AnimateText delay={100}
          transition={{
            from: {
              transform: `translateX(-5px) rotateY(90deg)`
            },
            to: {
              transform: `translateX(0px) rotateY(0deg)`
            }
          }}
        >
          { label }
        </AnimateText>
      </Label>
      <HighLight />
      {
        error &&
        <Message>{ error }</Message>
      }
    </Wrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  label: "",
  error: "",
  className: "",
  placeholder: ""
};

export default Input;
