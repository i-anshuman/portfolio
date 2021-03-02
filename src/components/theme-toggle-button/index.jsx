import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import { ToggleButton } from './styled';

const ThemeToggleButton = ({ className }) => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <div className={className}>
      <ToggleButton
        ariaLabel={`Toggle theme to ${theme === 'dark' ? 'light' : 'dark'}`}
        onClick={toggleTheme}
        theme={theme}
      >
        <i className="fas fa-sun"></i>
        <i className="far fa-moon"></i>
      </ToggleButton>
    </div>
  );
};

ThemeToggleButton.defaultProps = {
  className: ""
};

ThemeToggleButton.propTypes = {
  className: PropTypes.string
};

export default ThemeToggleButton;
