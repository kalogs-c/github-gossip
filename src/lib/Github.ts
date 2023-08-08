export async function listUsers(since: number) {
  const response = await fetch(`https://api.github.com/users?since=${since}`);
  const data = await response.json();

  return data;
}

export async function getUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  return data;
}

export async function listRepositories(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();

  return data;
}
