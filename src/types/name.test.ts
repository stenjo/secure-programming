import { describe, it, expect } from 'vitest';
import { Name } from './name';

describe('Name', () => {
  it('should create a Name instance with valid first and last names', () => {
    const title = 'Mr';
    const firstName = 'John';
    const lastName = 'Doe';
    const name = new Name(title, firstName, lastName);
    expect(name.first.toString()).toBe(firstName);
    expect(name.last.toString()).toBe(lastName);
  });

  it('should throw an error if first name is empty', () => {
    expect(() => new Name('Mr', '', 'Doe')).toThrowError('First name cannot be empty.');
  });

  it('should throw an error if last name is empty', () => {
    expect(() => new Name('Mr', 'John', '')).toThrowError('Last name cannot be empty.');
  });

  it('should throw an error if first name is invalid', () => {
    expect(() => new Name('Mr', 'John@', 'Doe')).toThrowError('Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.');
  });

  it('should throw an error if last name is invalid', () => {
    expect(() => new Name('Mr', 'John', 'Doe@')).toThrowError('Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.');
  });

  it('should throw an error if first name is longer than 35 characters', () => {
    const longName = 'a'.repeat(36);
    expect(() => new Name('Mr', longName, 'Doe')).toThrowError('Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.');
  });

  it('should throw an error if last name is longer than 35 characters', () => {
    const longName = 'a'.repeat(36);
    expect(() => new Name('Mr', 'John', longName)).toThrowError('Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.');
  });

});