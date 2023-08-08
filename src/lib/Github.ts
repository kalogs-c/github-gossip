export async function listUsers(since: number): Promise<User[]> {
  const response = await fetch(`https://api.github.com/users?since=${since}`);
  const data = await response.json();

  if (data.length === 0) {
    return [];
  }

  const users = data.map((user) => {
    return {
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      profile_url: user.html_url, 
      created_at: user.created_at,
    };
  })

  return users;
}

export async function getUser(username: string): Promise<User | undefined> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (data.message === "Not Found") {
    return undefined;
  }

  return {
    id: data.id,
    login: data.login,
    avatar_url: data.avatar_url,
    profile_url: data.html_url, 
    created_at: new Date(data.created_at).toLocaleDateString('us-US'),
    followers: data.followers,
  };
}

export async function listRepositories(username: string): Promise<Repository[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();

  if (data.message === "Not Found") {
    return [];
  }

  if (data.length === 0) {
    return [];
  }

  const repositories = data.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      stars: repo.stargazers_count,
    };
  })

  return repositories;
}
