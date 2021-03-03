import PropTypes from 'prop-types';
import Title from '../components/title';
import AnimateBox from '../components/animate-boxes';
import { about } from '../portfolio';
import styles from '../styles/about.module.scss';

const About = ({ className, id }) => {
  return (
    <section className={`${className} ${styles.about}`} id={id}>
      <h1 className={styles.about__greet}>
        <Title>About Me</Title>
      </h1>
      <div className={styles.about__content}>
        <AnimateBox delay={150}
          transition={{
            from: {
              opacity: 0,
              transform: 'translate(0, -50px) scale(0)'
            },
            to: {
              opacity: 1,
              transform: 'translate(0, 0) scale(1)'
            }
          }}
        >
          {
            about.map((sentence, idx) => (
              <p key={idx}  className={styles.about__paragraph}>
                { sentence }
              </p>
            ))
          }
        </AnimateBox>
      </div>
    </section>
  );
};

About.defaultProps = {
  className: ""
};

About.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default About;
