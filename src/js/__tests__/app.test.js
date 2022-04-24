import Validator from '../app';

test('Should return true since all rules are met', () => {
  const result = Validator.validateUsername('userName-978a');
  expect(result).toBeTruthy();
});

test('Should return false since it starts with a number', () => {
  const result = Validator.validateUsername('1userName-978a');
  expect(result).toBeFalsy();
});

test('Should return false since it ends with a number', () => {
  const result = Validator.validateUsername('userName-978');
  expect(result).toBeFalsy();
});

test('should return false since 4 digits in a row', () => {
  const result = Validator.validateUsername('userName-9758a');
  expect(result).toBeFalsy();
});

test('should return false since it ends with a character -', () => {
  const result = Validator.validateUsername('userName-9758a-');
  expect(result).toBeFalsy();
});
