import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params, setHeaders }) => {
  const username = params.username;

  const detailsResponse = await fetch(`/api/users/${username}/details`);
  const reposResponse = await fetch(`/api/users/${username}/repos`);

  const detailsCacheControl = detailsResponse.headers.get("cache-control");
  if (detailsCacheControl) {
    setHeaders({ "cache-control": detailsCacheControl });
  }

  const reposCacheControl = reposResponse.headers.get("cache-control");
  if (reposCacheControl) {
    setHeaders({ "cache-control": reposCacheControl });
  }

  return { 
    details: await detailsResponse.json(),
    repos: await reposResponse.json(),
  };
}) satisfies PageLoad;
