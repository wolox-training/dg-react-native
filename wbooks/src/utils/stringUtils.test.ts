import { getInitials, keepNumbers } from './stringUtils';

it('getInitials function', () => {
  expect(getInitials('John Doe')).toEqual('J D');
});

describe('keepNumbers suit', () => {
  it('keepNumbers with a string', () => {
    expect(keepNumbers('Hello25')).toEqual('25');
  });
  it('keepNumbers with a number', () => {
    expect(keepNumbers(2500)).toEqual('2500');
  });
});
