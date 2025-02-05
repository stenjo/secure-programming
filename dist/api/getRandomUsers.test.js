import { describe, it, expect, vi } from 'vitest';
const fetch = (await import('node-fetch')).default;
import { getRandomUsers } from './getRandomUsers';
describe('getRandomUsers', () => {
    it('fetches random users successfully', async () => {
        const mockResponse = {
            ok: true,
            status: 200,
            json: async () => ({ results: [{ name: 'John Doe' }] }),
        };
        vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);
        const users = await getRandomUsers(1);
        expect(users).toEqual([{ name: 'John Doe' }]);
        vi.restoreAllMocks();
    });
});
