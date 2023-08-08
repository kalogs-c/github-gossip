// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  type User = {
    id: number;
    login: string;
    avatar_url: string;
    profile_url: string;
    created_at: string; 
    followers?: number;
  }

  type Repository = {
    id: number;
    name: string;
    url: string;
    stars: number;
  }

	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
      users: { users: User[]; page: number };
      user: { details: User; repos: Repository[] };
    }
		// interface Platform {}
	}
}

export {};
