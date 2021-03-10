import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/nav';
import Header from '../components/header';
import Loader from '../components/loaders/page';
import ThemeToggleButton from '../components/theme-toggle-button';
import { ThemeContext } from "../contexts";
import { getThemePreference, changeTheme } from '../lib/utils';
import styles from '../styles/portfolio.module.scss';

const Introduction = lazy(() => import('../slides/introduction'));
const About = lazy(() => import('../slides/about'));
const Education = lazy(() => import('../slides/education'));
const Skills = lazy(() => import('../slides/skills'));
const Projects = lazy(() => import('../slides/projects'));
const Contact = lazy(() => import('../slides/contacts'));

const Portfolio = () => {
  const [theme, setTheme] = useState(getThemePreference());
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[ theme, toggleTheme ]}>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <Suspense fallback={ <Loader /> }>
          <Introduction id="introduction" className={styles.section} />
          <About id="about" className={styles.section} />
          <Education id="education" className={styles.section} />
          <Skills id="skills" className={styles.section} />
          <Projects id="projects" className={styles.section} />
          <Contact id="contact" className={styles.section} />
        </Suspense>
      </main>
      <ThemeToggleButton className={styles.theme_button}/>
    </ThemeContext.Provider>
  );
};

export default Portfolio;
