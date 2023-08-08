<script lang="ts">
	import MainContainer from '$lib/components/MainContainer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Github Gossip - {data.details.login}</title>
</svelte:head>

<MainContainer>
	<div class="flex flex-col items-center lg:items-start lg:flex-row gap-2 mb-3 overflow-x-auto">
		<div class="card w-96 image-full">
			<figure>
				<img src={data.details.avatar_url} alt="" />
			</figure>
			<div class="card-body">
				<h2 class="card-title text-2xl">
					{data.details.login}
					<span class="badge badge-secondary">id {data.details.id}</span>
				</h2>
				<p class="card-text">
					This account was created at {data.details.created_at}, has {data.details.followers} followers
					and
					{#if data.repos.length == 100}
						more than 99 public repositories
					{:else}
						{data.repos.length} public repositories.
					{/if}
				</p>
				<button class="card-actions justify-end">
					<a class="btn btn-primary text-white" href={data.details.profile_url} target="_blank"
						>Go to profile</a
					>
				</button>
			</div>
		</div>
	</div>
</MainContainer>

<div class="overflow-x-auto m-4">
	<table class="table">
		<thead>
			<tr>
				<th />
				<th>Title</th>
				<th>Stars</th>
				<th>URL</th>
			</tr>
		</thead>
		<tbody>
			{#each data.repos as repo, i}
				<tr class="hover">
					<th>{i + 1}</th>
					<td>{repo.name}</td>
					<td>{repo.stars}</td>
					<td><a href={repo.url} target="_blank" class="link">{repo.url}</a></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
