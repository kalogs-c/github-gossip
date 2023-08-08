import { describe, it, expect } from 'vitest';
import * as Github from './Github';

describe('Github API lib', () => {
	it('should list all users from 1 to 30', async () => {
    const users = await Github.listUsers();

    expect(users.length).toBe(30);
	});

  it('should get single user info', async () => {
    const user = await Github.getUser('kalogs-c');

    expect(user).toBeDefined();
  })

  it('should list all repositories from user', async () => {
    const repositories = await Github.listRepositories('kalogs-c');

    expect(repositories.length).toBeGreaterThan(10);
  });
});
