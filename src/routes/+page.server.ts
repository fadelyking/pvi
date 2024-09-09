import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";
import {
	clicksTable,
	type InsertClick,
	type SelectClick,
} from "$lib/server/schema";

export async function load({}) {
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
	click: async (addClick) => {
		console.log(addClick);
	},
};
