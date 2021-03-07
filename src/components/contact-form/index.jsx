import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from '../button';
import Loader from '../loaders/page';
import Overlay from '../overlay';
import { Input } from '../inputs';
import { validate } from '../../lib/validate';
import { api } from '../../portfolio';
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
      "May I know your email?",
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
  const [sending, handleSending] = useState({});

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
      handleSending(status => ({...status, status: true}));
      axios.post(api, data)
        .then(({data}) => {
          handleSending(status => ({...status, sent: data.ok}));
        })
        .catch(err => handleSending(status => ({...status, sent: false})))
        .finally(() => handleSending(status => ({...status, status: false})));
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
          autoComplete="off"
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
      <Loader
        text="Sending..."
        width={30}
        height={60}
        className={`${styles.contact__sending} ${sending.status ? styles.contact__zoom : ""}`}
      />
      <Overlay className={`${styles.contact__status} ${sending.hasOwnProperty('sent') ? styles.contact__zoom : ""}`}>
        <h1 className={`${sending.sent ? styles.contact__status__success : styles.contact__status__failed}`}>
          {
            sending.sent
              ? "Sent Successfully"
              : "Sending Failed"
          }
        </h1>
        <Button
          className={styles.contact__close_status}
          ariaLabel="Close Message Dialog"
          onClick={close}
        >
          Close
        </Button>
      </Overlay>
    </div>
  );
};

ContactForm.propTypes = {
  close: PropTypes.func
};

export default ContactForm;
