import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";

import { clicksTable, donorsTable, progressTable } from "$lib/server/schema";
import type { PageServerLoad } from "./$types";
import { ISOToName } from "$lib/helpers/ISOToName";

export const load: PageServerLoad = async ({ url }) => {
	// By default, we return Palestine and Israel if no query params are defined.
	const firstCountry = url.searchParams.get("q1") ?? "PS";
	const secondCountry = url.searchParams.get("q2") ?? "IL";

	const firstCountryFriendly = ISOToName(firstCountry);
	const secondCountryFriendly = ISOToName(secondCountry);

	if (!firstCountryFriendly || !secondCountryFriendly) {
		throw Error(
			"Server-sided error occured, our monkeys are hard at work to figure out why."
		);
	}

	return {
		clicks: await db.select().from(clicksTable),
		israel: await db
			.select()
			.from(clicksTable)
			.where(eq(clicksTable.country, firstCountryFriendly)),
		palestine: await db
			.select()
			.from(clicksTable)
			.where(eq(clicksTable.country, secondCountryFriendly)),
		progress: await db.select().from(progressTable),
		donors: await db.select().from(donorsTable),
	};
};

const progressResult = await db.select().from(progressTable);

let currentProgress = parseFloat(
	progressResult[0]?.progress !== null ? progressResult[0].progress : "50"
);

export const actions = {
	click: async ({ request }) => {
		const formData = await request.formData();
		const iso = formData.get("iso");

		console.log("Clicked for country: ", iso);

		// Check whether iso is valid 2 letter
		if (String(iso).length !== 2) {
			return { status: 400, body: "Invalid ISO" };
		}

		// TODO: Stop hardcoding
		if (iso === "PS") {
			try {
				await db.insert(clicksTable).values({
					country: "PS",
					created_at: new Date(),
				});
				currentProgress = Math.min(currentProgress + 0.1, 100);
				await db.update(progressTable).set({
					progress: currentProgress.toString(),
					last_updated: new Date(),
				});
				return { success: true, message: "Palestine entry added" };
			} catch (error) {
				console.error("Database insert error: ", error);
				return { success: false, error: "Failed to insert data" };
			}
		} else {
			try {
				await db.insert(clicksTable).values({
					country: "IL",
					created_at: new Date(),
				});
				currentProgress = Math.min(currentProgress - 0.1, 100);
				await db.update(progressTable).set({
					progress: currentProgress.toString(),
					last_updated: new Date(),
				});
				return { success: true, message: "Israel entry added" };
			} catch (error) {
				console.error("Database insert error: ", error);
				return { success: false, error: "Failed to insert data" };
			}
		}
	},
	donate: async ({ request }) => {
		const formData = await request.formData();

		const displayName = formData.get("display-name");
		const email = formData.get("email");
		const phoneNumber = formData.get("mobile-phone");
		const amount = parseFloat(formData.get("amount"));
		const country = formData.get("country");
		const message = formData.get("message");
		const receiveUpdates = formData.has("receive-update");
		const anonymous = formData.has("anonymous");

		try {
			await db.insert(donorsTable).values({
				name: displayName,
				email: email,
				phone_number: phoneNumber,
				amount: amount,
				message: message,
				country: country,
				receive_updates: receiveUpdates,
				anonymous: anonymous,
			});
			console.log("Donation record inserted successfully.");
			return {
				success: true,
				message: "Donation submitted successfully.",
			};
		} catch (error) {
			console.error("Database insert error: ", error);
			return { success: false, error: "Failed to insert donation data" };
		}
	},
};
