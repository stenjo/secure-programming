import { describe, it, expect } from 'vitest';
import { FileName } from './FileName';

describe('FileName', () => {
  it('should create a FileName instance with the given value', () => {
    const value = 'example.txt';
    const fileName = new FileName(value);

    expect(fileName.toString()).toEqual(value);
  });

  it('should throw an error if the filename exceeds the maximum length', () => {
    const value = 'a'.repeat(61);

    expect(() => new FileName(value)).toThrowError(
      `Filename exceeds max length of ${FileName.MAX_LENGTH} characters.`
    );
  });

  it('should throw an error if the filename contains invalid characters', () => {
    const value = 'example@file.txt';

    expect(() => new FileName(value)).toThrowError(
      'Filename contains invalid characters. Allowed: letters, numbers, dots, dashes, and underscores.'
    );
  });
});