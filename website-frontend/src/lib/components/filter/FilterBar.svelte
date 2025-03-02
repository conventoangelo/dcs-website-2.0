<script lang="ts">
	import type { FilterControls } from '$lib/types/filter_controls';
	import { ListFilter } from 'lucide-svelte';
	import FilterButton from './FilterButton.svelte';
	import * as DropdownMenu from '$lib/@shadcn-svelte/ui/dropdown-menu';
	import * as Tabs from '$lib/@shadcn-svelte/ui/tabs';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let controls: FilterControls,
		timed: boolean = false;

	$: query = new URLSearchParams($page.url.searchParams.toString());

	$: filter = (() => {
		const time = query.get('time');
		if (time === 'upcoming' || time === 'past' || time === 'all') {
			return time;
		}
		return 'upcoming';
	})();

	function time_nav(time: string): void {
		if (['all', 'past'].includes(time)) {
			query.set('time', time);
		} else {
			query.delete('time');
		}
		goto(`?${query.toString()}`, { noScroll: true });
	}
</script>

<div
	class="mx-auto hidden max-w-[82vw] items-center justify-between rounded-lg
		bg-white
		p-6 shadow-lg md:flex"
>
	<div class="flex items-center">
		<div class="mr-4 text-xs font-semibold uppercase text-muted-foreground">
			<p>FILTER BY</p>
		</div>
		{#if controls}
			<div class="flex items-center gap-x-2">
				{#each controls as control}
					<FilterButton {control} />
				{/each}
			</div>
		{/if}
	</div>
	{#if timed}
		<Tabs.Root value={filter}>
			<Tabs.List class="rounded-3xl bg-muted *:w-36 *:rounded-3xl">
				<Tabs.Trigger on:click={() => time_nav('upcoming')} value="upcoming"
					><span class="text-muted-foreground">Upcoming</span></Tabs.Trigger
				>
				<Tabs.Trigger on:click={() => time_nav('past')} value="past"
					><span class="text-muted-foreground">Past</span></Tabs.Trigger
				>
				<Tabs.Trigger on:click={() => time_nav('all')} value="all"
					><span class="text-muted-foreground">All</span></Tabs.Trigger
				>
			</Tabs.List>
		</Tabs.Root>
	{/if}
</div>

<div
	class="mx-auto flex w-[94vw] items-center justify-between rounded-lg
		bg-white
		p-6 shadow-lg md:hidden"
>
	<div class="mr-4 text-xs font-semibold uppercase text-muted-foreground">
		<p>FILTER BY</p>
	</div>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<ListFilter class="h-8 w-8" />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			{#if timed}
				<Tabs.Root value="all">
					<Tabs.List class="rounded [&>*]:w-28 [&>*]:rounded">
						<Tabs.Trigger value="upcoming">Upcoming</Tabs.Trigger>
						<Tabs.Trigger value="past">Past</Tabs.Trigger>
						<Tabs.Trigger value="all">All</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>
			{/if}
			<DropdownMenu.Group>
				{#if controls}
					{#each controls as control}
						<DropdownMenu.Label class="font-normal">
							<FilterButton {control} />
						</DropdownMenu.Label>
					{/each}
				{/if}
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
