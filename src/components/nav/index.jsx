import React from 'react';
import { Link } from 'react-scroll';
import { name, slides, socials } from '../../portfolio.json';
import styles from '../../styles/nav.module.scss';

const SideNav = props => {
  return (
    <nav className={styles.nav}>
      <span className={styles.nav__logo}>
        <span>{ name[0] }</span>
        <span>{ name }</span>
      </span>
      <div className={styles.nav__list}>
        {
          slides.map(({ link, icon, title }, idx) => (
            <Link key={ idx }
              to={ link }
              spy
              smooth
              isDynamic
              hashSpy
              className={styles.nav__list__link}
              activeClass={styles.nav__list__active}
            >
              <span className={styles.nav__list__link__icon}>
                <i className={ icon }></i>
              </span>
              <span className={styles.nav__list__link__title}>
                { title }
              </span>
            </Link>
          ))
        }
      </div>
      <div className={styles.nav__social}>
        {
          socials.map(({ link, icon }, idx) => (
            <a key={ idx }
              href={ link }
              target="_blank"
              rel="noopener noreferrer"
              className={styles.nav__social__link}
            >
              <i className={ icon }></i>
            </a>
          ))
        }
      </div>
    </nav>
  );
}

export default SideNav;
