<div class="main-container">
	<header class="daisy-navbar p-10">
		<div class="daisy-navbar-start">
			<a href="/" class="logo"> Github Gossip </a>
		</div>
	</header>
	<slot />
</div>

<style lang="postcss">
	.main-container {
		@apply flex flex-col;
		@apply items-center;
		@apply w-full;
	}

	.logo {
		@apply mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary;
	}
</style>
