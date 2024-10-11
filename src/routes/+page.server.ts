import { db } from "$lib/server/db";
import { clicksTable, donorsTable } from "$lib/server/schema";

export const actions = {
	click: async ({ request }) => {
		const formData = await request.formData();
		const iso = formData.get("iso");

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
