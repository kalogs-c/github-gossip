import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from './$types';
import { listUsers } from "$lib/Github";

export const GET = (async ({ url }) => {
  const since = Number(url.searchParams.get("since"));

  if (isNaN(since) || since < 0) {
    return error(400, "Param `since` must be a positive integer.");
  }

  const users = await listUsers(since);

  const nextUrl = new URL(url);
  nextUrl.searchParams.set("since", (since + 30).toString());

  return json({
    users,
    nextPage: nextUrl.toString(),
  });
}) satisfies RequestHandler;
