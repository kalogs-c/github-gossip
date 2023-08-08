import { getUser } from "$lib/Github";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async ({ params }) => {
  const username = params.username;

  const userData = await getUser(username);

  if (!userData) {
    return error(404, { message: "User not found" });
  }

  return json(userData);
}) satisfies RequestHandler;
