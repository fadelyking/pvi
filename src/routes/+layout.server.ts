import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";

import { clicksTable, donorsTable } from "$lib/server/schema";
import type { PageServerLoad } from "./$types";
import { ISOToName } from "$lib/helpers/ISOToName";

export const load: PageServerLoad = async ({ url }) => {
	// By default, we return Palestine and Israel if no query params are defined.
	const firstCountry = url.searchParams.get("q1") ?? "IR";
	const secondCountry = url.searchParams.get("q2") ?? "IL";

	// TODO: Get value between two country clicks

	// const firstCountryFriendly = ISOToName(firstCountry);
	// const secondCountryFriendly = ISOToName(secondCountry);

	// if (!firstCountryFriendly || !secondCountryFriendly) {
	// 	throw Error(
	// 		"Server-sided error occured, our monkeys are hard at work to figure out why."
	// 	);
	// }

	// const test = await db.select().from(clicksTable).where(eq(clicksTable.country, firstCountry));
	// console.log(test);

	return {
		q1: firstCountry,
		q2: secondCountry,
		clicks: await db.select().from(clicksTable),
		firstCountry: await db
			.select()
			.from(clicksTable)
			.where(eq(clicksTable.country, firstCountry)),
		secondCountry: await db
			.select()
			.from(clicksTable)
			.where(eq(clicksTable.country, secondCountry)),
		donors: await db.select().from(donorsTable),
		donorsFirstCountry: await db
			.select()
			.from(donorsTable)
			.where(eq(donorsTable.country, firstCountry)),
		donorsSecondCountry: await db
			.select()
			.from(donorsTable)
			.where(eq(donorsTable.country, secondCountry)),
	};
};
