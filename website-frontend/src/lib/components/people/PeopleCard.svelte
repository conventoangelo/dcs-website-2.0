<script lang="ts">
	import { PUBLIC_APIURL } from '$env/static/public';

	import { Person } from '$lib/models/people';
	export let person: Person;
	export let laboratory: string;
</script>

<div class="card relative flex h-full flex-col overflow-hidden md:h-[380px]">
	<div class="inset-0 h-24 rounded-t-lg bg-gray-300 md:h-40">
		{#if person.background_image}
			<img
				class="h-full w-full rounded-t-lg object-cover"
				src="{PUBLIC_APIURL}/assets/{person.background_image}"
				alt="Background"
			/>
		{/if}
	</div>

	<div class="z-10 -mt-16 items-center px-3 md:-mt-20">
		<div
			class="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-gray-200 bg-gray-100 md:h-32 md:w-32"
		>
			{#if person.profile_image}
				<img
					class="h-full w-full rounded-full object-cover"
					src="{PUBLIC_APIURL}/assets/{person.profile_image}"
					alt="Profile"
				/>
			{:else}
				<h1 class="text-center text-2xl font-medium text-[#004420a2]">`⎚⩊⎚´</h1>
			{/if}
		</div>

		<div class="p-3 text-center md:mb-3 md:mt-2">
			<div class="text-xs font-semibold uppercase leading-tight text-gray-500">
				<p>{person.position}</p>
			</div>
			<h3 class="pb-2 font-bold leading-tight text-gray-900 md:py-1 md:text-xl">
				{person.first_name}
				{person.last_name}
			</h3>
			{#if laboratory}
				<div class="flex items-center justify-center text-xs text-gray-500 md:px-6">
					<p class="line-clamp-2 w-full">{laboratory}</p>
				</div>
			{/if}
		</div>
	</div>
</div>
