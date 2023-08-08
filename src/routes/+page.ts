import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url, setHeaders }) => {
  const page = Number(url.searchParams.get("page")) || 0;

  const response = await fetch(`/api/users?since=${page * 30}`);

  const cacheControl = response.headers.get("cache-control");
  if (cacheControl) {
    setHeaders({ "cache-control": cacheControl });
  }

  const listUsersResponse = await response.json();

  return { users: listUsersResponse.users, page };
}) satisfies PageLoad;
