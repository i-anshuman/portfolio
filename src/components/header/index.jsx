import { useState } from 'react';
import { Link } from 'react-scroll';
import AnimateBox from '../animate-boxes';
import Button from '../button';
import { name, slides } from '../../portfolio.json';
import styles from '../../styles/header.module.scss';

const Header = props => {
  const [ toggle, handleToggle ] = useState(false);
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header}>
        <span className={styles.header__brand}>
          { name }
        </span>
        <Button className={styles.header__toggle_button}
          onClick={() => handleToggle(state => !state)}
          ariaLabel="Open Menu"
        >
          <div
            className={`${styles.header__hamburger} ${toggle && styles.header__hamburger__active}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Button>
        <div className={styles.header__menu}>
          {
            toggle &&
            <AnimateBox
              delay={0}
              transition={{
                from: {
                  opacity: 0,
                  transform: 'translate(0, -200px)'
                },
                to: {
                  opacity: 1,
                  transform: 'translate(0, 0)'
                }
              }}
            >
              {
                slides.map(({ link, icon }, idx) => (
                  <Link key={ idx }
                    to={ link }
                    spy
                    smooth
                    isDynamic
                    className={styles.header__menu__link}
                    activeClass={styles.header__menu__active}
                  >
                    <span className={styles.header__menu__link__icon}>
                      <i className={ icon }></i>
                    </span>
                  </Link>
                ))
              }
            </AnimateBox>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
