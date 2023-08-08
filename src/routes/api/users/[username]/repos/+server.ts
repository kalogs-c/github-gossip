import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { listRepositories } from "$lib/Github";

export const GET = (async ({ params }) => {
  const username = params.username;

  const userRepos = await listRepositories(username);

  if (userRepos.length === 0) {
    return error(404, { message: "User not found" });
  }

  return json(userRepos);
}) as RequestHandler;
