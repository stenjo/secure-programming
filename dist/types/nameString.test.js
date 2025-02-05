import { describe, it, expect } from 'vitest';
import { NameString } from './nameString';
describe('NameString', () => {
    it('should create a NameString instance with a valid name', () => {
        const validName = 'JohnDoe123';
        const nameString = new NameString(validName);
        expect(nameString.toString()).toBe(validName);
    });
    it('should throw an error if the name is empty', () => {
        expect(() => new NameString('')).toThrowError('Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.');
    });
    it('should throw an error if the name contains invalid characters', () => {
        expect(() => new NameString('John@Doe')).toThrowError('Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.');
    });
    it('should throw an error if the name is longer than 35 characters', () => {
        const longName = 'a'.repeat(36);
        expect(() => new NameString(longName)).toThrowError('Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.');
    });
    it('should create a NameString instance with a name containing apostrophes', () => {
        const validNameWithApostrophe = "O'Connor";
        const nameString = new NameString(validNameWithApostrophe);
        expect(nameString.toString()).toBe(validNameWithApostrophe);
    });
    it('should create a NameString instance with a name containing a dash', () => {
        const validNameWithDash = "John-Doe";
        const nameString = new NameString(validNameWithDash);
        expect(nameString.toString()).toBe(validNameWithDash);
    });
});
