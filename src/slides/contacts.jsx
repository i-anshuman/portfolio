import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Title from '../components/title';
import Button from '../components/button';
import ContactForm from '../components/contact-form';
import { openLink } from '../lib/utils';
import { email, socials } from '../portfolio';
import styles from '../styles/contact.module.scss';

const Contact = ({ className, id}) => {
  const [dialog, handleDialog] = useState(false);
  const nodeRef= useRef(null);
  return (
    <section className={`${className} ${styles.contact}`} id={id}>
      <h1 className={styles.contact__greet}>
        <Title>Contact Me</Title>
      </h1>
      <div className={styles.contact__content}>
        <CSSTransition
          in={!dialog}
          timeout={300}
          classNames="dialog"
          nodeRef={nodeRef}
          unmountOnExit
          onEnter={() => handleDialog(false)}
          onExited={() => handleDialog(true)}
        >
          <Button className={styles.contact__msg_btn}
            ariaLabel="Open Message Dialog"
            onClick={() => handleDialog(true)}
          >
            Send Me A Message
          </Button>
        </CSSTransition>
        <CSSTransition
          in={dialog}
          timeout={300}
          //nodeRef={nodeRef}
          classNames="dialog"
          unmountOnExit
          onEnter={() => handleDialog(true)}
          onExited={() => handleDialog(false)}
        >
          <div className={styles.contact__msg_dialog}>
            <ContactForm close={() => handleDialog(false)} />
          </div>
        </CSSTransition>
        <div className={styles.contact__other}>
          <p className={styles.contact__mail}>
            Mail Me
            <br/>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <div className={styles.contact__social}>
            {
              socials
                .filter(({title}) => title !== 'Mail')
                .map(({title, link, icon}, idx) => (
                  <Button key={idx}
                    className={styles.contact__social__btn}
                    onClick={() => openLink(link)}
                    ariaLabel={`Open ${title}`}
                  >
                    <i className={icon}></i>
                    <small>{title}</small>
                  </Button>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.defaultProps = {
  className: ""
};

Contact.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Contact;
