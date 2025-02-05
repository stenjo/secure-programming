import { describe, it, expect } from 'vitest';
import { Guid } from './guid';
describe('Guid', () => {
    it('should create a Guid instance with a valid GUID', () => {
        const validGuid = '123e4567-e89b-12d3-a456-426614174000';
        const guid = new Guid(validGuid);
        expect(guid.toString()).toBe(validGuid);
    });
    it('should throw an error for an invalid GUID', () => {
        const invalidGuid = 'invalid-guid';
        expect(() => new Guid(invalidGuid)).toThrow('Invalid GUID format');
    });
    it('should throw an error for an empty string', () => {
        const emptyGuid = '';
        expect(() => new Guid(emptyGuid)).toThrow('Invalid GUID format');
    });
    it('should throw an error for a GUID with incorrect length', () => {
        const shortGuid = '123e4567-e89b-12d3-a456-42661417400';
        expect(() => new Guid(shortGuid)).toThrow('Invalid GUID format');
    });
    it('should throw an error for a GUID with invalid characters', () => {
        const invalidCharGuid = '123e4567-e89b-12d3-a456-42661417400g';
        expect(() => new Guid(invalidCharGuid)).toThrow('Invalid GUID format');
    });
});
