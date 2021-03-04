import PropTypes from 'prop-types';
import Title from '../components/title';
import AnimateBox from '../components/animate-boxes';
import { skills } from '../portfolio';
import styles from '../styles/skills.module.scss';

const Skills = ({ className, id}) => {
  return (
    <section className={`${className} ${styles.skills}`}  id={id}>
      <h1 className={styles.skills__greet}>
        <Title>Skills</Title>
      </h1>
      <div className={styles.skills__list}>
        <AnimateBox  delay={150}
          transition={{
            from: {
              opacity: 0,
              transform: 'rotateX(90deg)'
            },
            to: {
              opacity: 1,
              transform: 'rotateX(0deg)'
            }
          }}
        >
        {
          skills.map((skill, idx) => (
            <div key={idx} className={styles.skill}>
              { skill }
            </div>
          ))
        }
        </AnimateBox>
      </div>
    </section>
  );
};

Skills.defaultProps = {
  className: ""
};

Skills.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Skills;
