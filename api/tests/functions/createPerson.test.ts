import { describe, it, expect } from 'vitest';
import { createPerson } from '../../src/functions/createPerson';
import type { HttpRequest, InvocationContext } from '@azure/functions';

describe('createPerson function', () => {
  it('should return 201 with valid input', async () => {
    const request = {
      json: async () => ({
        title: 'Dr',
        firstName: 'Alice',
        lastName: 'Wonderland'
      })
    } as unknown as HttpRequest;

    const context = { log: () => {} } as InvocationContext;

    const response = await createPerson(request, context);
    expect(response.status).toBe(201);
    expect(response.jsonBody).toHaveProperty('id');
    expect(response.jsonBody.firstName).toBe('Alice');
  });

  it('should return 400 with missing input', async () => {
    const request = {
      json: async () => ({})
    } as unknown as HttpRequest;

    const context = { log: () => {} } as InvocationContext;

    const response = await createPerson(request, context);
    expect(response.status).toBe(400);
  });
});