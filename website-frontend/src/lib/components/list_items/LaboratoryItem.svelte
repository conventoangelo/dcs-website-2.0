<script lang="ts">
	import { Image } from 'lucide-svelte';
	import { PUBLIC_APIURL } from '$env/static/public';
	import { reloading } from '$lib/stores';

	export let laboratory;
	$: ({ name, logo, description, contact_email, slug } = laboratory);
</script>

<a
	href="/research/labs/{slug}"
	data-sveltekit-reload
	on:click={() => {
		$reloading = true;
	}}
>
	<div
		class="my-4 flex justify-start gap-6 rounded-lg p-10 text-background"
		style="background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)/0.25)); grid-template-columns: 1fr auto;"
	>
		{#if logo}
			<div class="flex h-40 w-40 items-center justify-center">
				<img src="{PUBLIC_APIURL}/assets/{logo}" alt={name} class="max-h-40 max-w-40" />
			</div>
		{:else}
			<div class="flex h-40 w-40 items-center justify-center rounded-full bg-secondary">
				<Image class="h-10 w-10 text-background" />
			</div>
		{/if}

		<div class="flex flex-col justify-center *:my-2 md:max-w-[50vw]">
			<p class="text-3xl font-bold">{name}</p>
			<p class="line-clamp-3">{description}</p>
		</div>
	</div>
</a>
