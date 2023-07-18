<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
	export let data;
</script>

<Navbar user={data.user} />
<slot />
