<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	// Client API:
	const { form, message, enhance } = superForm(data.form, {
		onResult: (result) => {
			if (result.result.status === 200) {
				setTimeout(() => {
					goto('/login');
				}, 10);
			}
		}
	});
</script>

<svelte:head>
	<title>Stable | Sign Up</title>
	<meta name="description" content="SvelteKit - Lucia - Drizzle ORM Template" />
</svelte:head>

<div class="hero h-[90vh] bg-base-200">
	<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
		<div class="card-body">
			<div class="flex justify-center">
				<h1 class="text-2xl font-semibold">Create Account</h1>
			</div>
			<form method="POST" use:enhance>
				<div class="form-control">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						id="email"
						name="email"
						type="text"
						placeholder="email"
						class="input input-bordered"
						bind:value={$form.email}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text">Password</span>
					</label>
					<input
						id="password"
						bind:value={$form.password}
						name="password"
						type="text"
						placeholder="password"
						class="input input-bordered"
					/>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" type="submit">Sign Up</button>
				</div>
			</form>
			<div class="mt-2">
				<p>Already have an account? <a href="/login" class="text-blue-600 underline">LogIn</a></p>
			</div>
		</div>
	</div>
</div>
