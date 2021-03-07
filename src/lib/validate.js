import validator from 'validator';

export const validate = (value, type) => {
  const status = {
    valid: false
  };
  switch (type) {
    case "name":
      status.valid = validator.isAlpha(value, 'en-US', { ignore: " " });
      break;
    case "email":
      status.valid = validator.isEmail(value);
      break;
    case "message":
      status.valid = validator.isAscii(value);
      break;
    default:
      status.description = `Invalid type '${type}' provided. Type must be one of 'name', 'email' or 'message'.`;
  }
  return status;
};
