<script lang="ts">
	import type { FilterControls } from './filter_controls';
	import { ListFilter } from 'lucide-svelte';
	import FilterButton from './FilterButton.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Tabs from '$lib/components/ui/tabs';

	export let controls: FilterControls,
		timed: boolean = false;
</script>

<div
	class="mx-auto hidden max-w-[94vw] items-center justify-between rounded-lg
		bg-white
		p-6 shadow-lg md:flex md:max-w-[82vw]"
>
	<div class="flex items-center">
		<div class="mr-4 text-xs font-semibold uppercase text-gray-500">
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
		<Tabs.Root value="upcoming">
			<Tabs.List class="rounded-3xl [&>*]:w-36 [&>*]:rounded-3xl">
				<Tabs.Trigger value="upcoming">Upcoming</Tabs.Trigger>
				<Tabs.Trigger value="past">Past</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Root>
	{/if}
</div>

<div class="flex justify-end md:hidden">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<div class="mr-2 rounded-full bg-white p-4 shadow-xl">
				<ListFilter class="h-8 w-8" />
			</div>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			{#if timed}
				<Tabs.Root value="upcoming">
					<Tabs.List class="rounded [&>*]:w-28 [&>*]:rounded">
						<Tabs.Trigger value="upcoming">Upcoming</Tabs.Trigger>
						<Tabs.Trigger value="past">Past</Tabs.Trigger>
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
