import PropTypes from 'prop-types';
import Title from '../components/title';
import AnimateBox from '../components/animate-boxes';
import { education } from '../portfolio';
import styles from '../styles/edu.module.scss';

const Education = ({ className, id}) => {
  return (
    <section className={`${className} ${styles.edu}`} id={id}>
      <h1 className={styles.edu__greet}>
        <Title>Education</Title>
      </h1>
      <div className={styles.edu__wrapper}>
        <AnimateBox delay={150}
          transition={{
            from: {
              opacity: 0,
              transform: 'translate(0, -250px) scale(0)'
            },
            to: {
              opacity: 1,
              transform: 'translate(0, 0) scale(1)'
            }
          }}
        >
          <div className={styles.edu__timeline}>
            <ul>
              {
                education.map(
                  ({year, degree, university}, idx) => (
                    <li key={ idx }>
                      <p className={styles.edu__timeline__date}>
                        { year }
                      </p>
                      <div className={styles.edu__timeline__qualification}>
                        <p className={styles.edu__timeline__degree}>
                          { degree }
                        </p>
                        <p className={styles.edu__timeline__university}>
                          { university }
                        </p>
                      </div>
                    </li>
                  )
                )
              }
            </ul>
          </div>
        </AnimateBox>
      </div>
    </section>
  );
};


Education.defaultProps = {
  className: ""
};

Education.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Education;
