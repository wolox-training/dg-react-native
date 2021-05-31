import { getInitials, keepNumbers } from './stringUtils';

describe('getInitials suit', () => {
  it('getInitials with a valid string', () => {
    expect(getInitials('John Doe')).toEqual('J D');
  });
  it('getInitials with an empty string', () => {
    expect(getInitials('')).toEqual('');
  });
  it('getInitials with a undefine', () => {
    expect(getInitials()).toEqual(undefined);
  });
});

describe('keepNumbers suit', () => {
  it('keepNumbers with a string', () => {
    expect(keepNumbers('Hello25')).toEqual('25');
  });
  it('keepNumbers with a number', () => {
    expect(keepNumbers(2500)).toEqual('2500');
  });
  it('keepNumbers with a float', () => {
    expect(keepNumbers(1.2)).toEqual('12');
  });
  it('keepNumbers with undefine', () => {
    expect(keepNumbers()).toEqual('');
  });
});
