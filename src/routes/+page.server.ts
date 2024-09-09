import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";
import {
	clicksTable,
	type InsertClick,
	type SelectClick,
} from "$lib/server/schema";

import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	return {
		clicks: await db.select().from(clicksTable),
		israel: await db
			.select()
			.from(clicksTable)
			.where(eq(clicksTable.country, "Israel")),
		palestine: await db
			.select()
			.from(clicksTable)
			.where(eq(clicksTable.country, "Palestine")),
	};
}

export const actions = {
	click: async (event) => {
		const formData = await event.request.formData();
		const iso = formData.get("iso");
		// Check whether iso is valid 2 letter
		if (String(iso).length !== 2) {
			return { status: 400, body: "Invalid ISO" };
		}

		console.log("Valid ISO: " + iso);

		// TODO: Insert click, make frontend aware of change/result
		return { status: 200, body: "OK" };
	},
};
