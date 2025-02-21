/** @type {import('./$types').PageServerLoad} */
import { readItems, readSingleton } from '@directus/sdk';
import { parse } from 'valibot';
import { PeopleOverview } from '$lib/models/people_overview';
import getDirectusInstance from '$lib/directus';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	const people = await directus.request(
		readItems('people', {
			fields: ['*', 'affiliations.laboratories_id.*']
		})
	);
	console.log(people);
	const people_overview = parse(
		PeopleOverview,
		await directus.request(readSingleton('people_overview'))
	);

	return {
		people,
		people_overview
	};
}
