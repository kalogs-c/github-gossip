import { describe, it, expect } from 'vitest';
import { GET } from './+server';

describe('Details API route', () => {
  it("should list user's repositories", async () => {
    const result = await GET({ params: { username: 'kalogs-c' } });

    expect(result.status).toBe(200);
  }); 
});
