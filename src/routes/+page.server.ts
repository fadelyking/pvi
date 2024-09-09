import { db } from "$lib/server/db";
import {
	clicksTable,
	type InsertClick,
	type SelectClick,
} from "$lib/server/schema";

export async function load({}) {
	return {
		clicks: await db.select().from(clicksTable),
	};
}

export const actions = {
	click: async (addClick) => {
		console.log(addClick);
	},
};
