<script lang="ts">
	/** @type {import('./$types').PageData} */

	import Banner from '$lib/components/banners/Banner.svelte';
	import CardPanel from '$lib/components/panel/CardPanel.svelte';
	import FilterBar from '$lib/components/filter/FilterBar.svelte';
	import type { FilterControls } from '$lib/types/filter_controls.js';

	export let data;

	$: ({ publications } = data);

	let controls: FilterControls = [];
</script>

<Banner title="Featured Outputs" />

<div class="my-12">
	<FilterBar {controls} />
</div>

<CardPanel>
	{#each publications as publication}
		{publication}
	{/each}
</CardPanel>
