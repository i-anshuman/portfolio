import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../inputs';
import Button from '../button';
import { validate } from '../../lib/validate';
import styles from './contact.module.scss';

const fields = [
  {
    name: "name",
    type: "text",
    label: "your good name",
    error: [
      "You forgot to tell your name.",
      "Name can have alphabets and spaces only."
    ]
  },
  {
    name: "email",
    type: "email",
    label: "your email",
    error: [
      "May I've your email.",
      "Looks like email is not valid."
    ]
  },
  {
    name: "message",
    type: "text",
    label: "your message",
    error: [
      "You wanted to say something, didn't you?",
      "You wanted to say something, didn't you?"
    ]
  }
];

const ContactForm = ({ close }) => {
  const [data, handleData] = useState({});
  const [error, handleError] = useState({});
  const [index, changeIndex] = useState(0);
  const [shake, handleShake] = useState(false);

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => {
        handleShake(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [shake]);

  const handleChange = e => {
    handleData(d => ({...d, [e.target.name]: e.target.value}))
  };

  const handleValidation = e => {
    const { name, value } = e.target;
    const status = validate(value, name);
    if (status.valid === true) {
      handleError(error => delete error[name]);
    }
    else {
      const errorIndex = value.length === 0 ? 0 : 1;
      handleError(error => ({...error, [name]: fields[index].error[errorIndex] }));
    }
  };

  const next = () => {
    if (index < fields.length -1) {
      if (!error[fields[index].name] && data[fields[index].name]) {
        changeIndex(idx => idx+1);
      }
      else {
        handleShake(true);
      }
    }
  };

  const previous = () => {
    if (index > 0){
      changeIndex(idx => idx-1);
    }
  };

  const sendMessage = () => {
    if (!error[fields[index].name] && data[fields[index].name]) {
      console.log("Sending")
    }
    else {
      handleShake(true);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact__controls}>
        <Button
          className={styles.contact__prev}
          ariaLabel="Previous Field"
          onClick={previous}
        >
          <i className="fa fa-angle-left"></i>
        </Button>
        <Button
          className={styles.contact__close}
          ariaLabel="Close Message Dialog"
          onClick={close}
        >
          <i className="fa fa-times"></i>
        </Button>
      </div>
      <div className={styles.contact__form}>
        <Input
          name={fields[index].name}
          label={fields[index].label}
          value={data[fields[index].name] || ""}
          error={error[fields[index].name]}
          onChange={handleChange}
          onBlur={handleValidation}
          className={`${shake && styles.contact__shake}`}
        />
        <Button
          className={styles.contact__next}
          ariaLabel="Next Field"
          onClick={(index === fields.length-1) ? sendMessage : next}
        >
          {
            (index === fields.length-1)
              ? <i className="fa fa-send"></i>
              : <i className="fa fa-angle-right"></i>
          }
        </Button>
      </div>
      <small className={styles.contact__note}>
        <b>&#x1F6C8;</b> Your information will never be shared with anyone.
      </small>
    </div>
  );
};

ContactForm.propTypes = {
  close: PropTypes.func
};

export default ContactForm;
