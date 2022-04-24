export default class Validator {
  static validateUsername(username) {
    const rules1 = /^[a-z][\w_-]*[a-z]$/i.test(username);
    const rules2 = /\d{4}/.test(username);

    if (rules1 && !rules2) {
      return true;
    }
    return false;
  }
}
