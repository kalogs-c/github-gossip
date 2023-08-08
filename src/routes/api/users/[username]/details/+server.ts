import { getUser } from "$lib/Github";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async ({ params }) => {
  const username = params.username;

  const userData = await getUser(username);

  if (userData.message === "Not Found") {
    return error(404, { message: "User not found" });
  }

  const formattedUser = {
    id: userData.id,
    login: userData.login,
    profile_url: userData.html_url,
    created_at: userData.created_at,
  }

  return json(formattedUser);
}) satisfies RequestHandler;
