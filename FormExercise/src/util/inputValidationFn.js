export function isEmail(email) {
  return email.includes("@");
}

export function hasMinimumLengthOf(length, value) {
  return value.trim().length < length ? false : true;
}

export function isEqualTo(value1, value2) {
  return value1 === value2 ? true : false;
}

export function isEmpty(value) {
  return value === "" ? true : false;
}
