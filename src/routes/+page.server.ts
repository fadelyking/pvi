import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";

import { clicksTable, donorsTable, progressTable } from "$lib/server/schema";
import type { PageServerLoad } from "./$types";
import { ISOToName } from "$lib/helpers/ISOToName";

export const load: PageServerLoad = async ({ url }) => {
	// By default, we return Palestine and Israel if no query params are defined.
	const firstCountry = url.searchParams.get("q1") ?? "PS";
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
	};
};

export const actions = {
	click: async ({ request }) => {
		const formData = await request.formData();
		const iso = formData.get("iso");

		console.log("Clicked for country: ", iso);

		// Check whether iso is valid 2 letter
		if (String(iso).length !== 2 || !iso) {
			return { status: 400, body: "Invalid ISO" };
		}

		try {
			await db.insert(clicksTable).values({
				country: iso.toString(),
				created_at: new Date(),
			});
			return { success: true, message: "Click added" };
		} catch (error) {
			console.error("Database insert error: ", error);
			return { success: false, error: "Failed to insert data" };
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
