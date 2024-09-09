import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";
import {
	clicksTable,
	type InsertClick,
	type SelectClick,
} from "$lib/server/schema";

import type { PageServerLoad, Actions } from "./$types";

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
};

export const actions = {
	click: async ({ request }) => {
		const formData = await request.formData();
		const iso = formData.get("iso");

		// Check whether iso is valid 2 letter
		if (String(iso).length !== 2) {
			return { status: 400, body: "Invalid ISO" };
		}

		if (iso === "PS") {
			try {
				await db.insert(clicksTable).values({
					country: "Palestine",
					created_at: new Date(),
				});
				return { success: true, message: "Palestine entry added" };
			} catch (error) {
				console.error("Database insert error: ", error);
				return { success: false, error: "Failed to insert data" };
			}
		} else {
			try {
				await db.insert(clicksTable).values({
					country: "Israel",
					created_at: new Date(),
				});
				return { success: true, message: "Palestine entry added" };
			} catch (error) {
				console.error("Database insert error: ", error);
				return { success: false, error: "Failed to insert data" };
			}
		}
	},
};
