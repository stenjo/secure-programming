import { describe, it, expect } from 'vitest';
import { DomainModel } from './DomainModel';

describe('DomainModel', () => {
  describe('constructor', () => {
    it('should throw an error if value is null', () => {
      expect(() => new DomainModel(null)).toThrowError('DomainModel value cannot be null or undefined.');
    });

    it('should throw an error if value is undefined', () => {
      expect(() => new DomainModel(undefined)).toThrowError('DomainModel value cannot be null or undefined.');
    });

    it('should set the value property', () => {
      const value = 'test';
      const domainModel = new DomainModel(value);

      expect(domainModel.value).toEqual(value);
    });

    it('should call the validate method', () => {
      const validateSpy = jest.spyOn(DomainModel.prototype, 'validate');
      const value = 'test';
      new DomainModel(value);

      expect(validateSpy).toHaveBeenCalled();
    });
  });

  describe('toString', () => {
    it('should return the string representation of the value', () => {
      const value = 'test';
      const domainModel = new DomainModel(value);

      expect(domainModel.toString()).toEqual(String(value));
    });
  });

  describe('equals', () => {
    it('should return true if the values are equal', () => {
      const value = 'test';
      const domainModel1 = new DomainModel(value);
      const domainModel2 = new DomainModel(value);

      expect(domainModel1.equals(domainModel2)).toBe(true);
    });

    it('should return false if the values are not equal', () => {
      const domainModel1 = new DomainModel('test1');
      const domainModel2 = new DomainModel('test2');

      expect(domainModel1.equals(domainModel2)).toBe(false);
    });
  });
});