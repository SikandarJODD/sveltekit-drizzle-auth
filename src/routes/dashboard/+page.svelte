<script>
	export let data;
</script>
<svelte:head>
	<title>Stable | Dashboard</title>
	<meta name="description" content="SvelteKit - Lucia - Drizzle ORM Template">
</svelte:head>
<div class="container px-32 py-4">
	<h1 class="text-4xl font-bold">Dashboard</h1>
	{#if data.user!==null}
		<!-- content here -->
		<p class="text-blue-500 pl-2 py-2">{data.user.email}</p>
	{:else}
		<p class="text-blue-500 pl-2 py-2">Not Logged In</p>
	{/if}
</div>
