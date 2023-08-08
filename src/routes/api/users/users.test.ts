import { describe, it, expect } from 'vitest';
import { GET } from './+server';


describe('Details API route', () => {
  it('should get single user info', async () => {
    const url = new URL("https://api.github.com/users/kalogs-c");

    const result = await GET({ url }).catch(e => console.log(e));

    expect(result.status).toBe(200);
  }); 
});
