<script lang="ts">
	import MainContainer from '$lib/components/MainContainer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Github Gossip</title>
</svelte:head>

<MainContainer>
	<main class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
		{#each data.users as user}
			<a href="/{user.login}" class="stat shadow mr-4">
				<div class="stat-figure text-primary avatar h-20 w-20 mask mask-squircle">
					<img src={user.avatar_url} alt="{user.login} github avatar" />
				</div>
				<span class="stat-value">{user.id}</span>
				<span class="stat-title">{user.login}</span>
			</a>
		{/each}
	</main>

	<div class="join grid grid-cols-2 fixed bottom-5 right-5">
		{#if data.page > 0}
			<a href="/?page={data.page - 1}" class="join-item btn md:btn-outline">Previous</a>
		{/if}
		<a href="/?page={data.page + 1}" class="join-item btn btn-primary md:btn-outline">Next</a>
	</div>
</MainContainer>
