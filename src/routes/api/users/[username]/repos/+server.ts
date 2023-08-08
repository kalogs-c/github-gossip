import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { listRepositories } from "$lib/Github";

export const GET = (async ({ params }) => {
  const username = params.username;

  const userRepos = await listRepositories(username);

  if (userRepos.message === "Not Found") {
    return error(404, { message: "User not found" });
  }

  const formattedRepos = userRepos.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
    };
  })

  return json(formattedRepos);
}) as RequestHandler;
