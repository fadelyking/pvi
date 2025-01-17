import {
	pgTable,
	timestamp,
	text,
	serial,
	numeric,
	boolean,
} from "drizzle-orm/pg-core";

export const clicksTable = pgTable("clicks", {
	id: serial("id").primaryKey(),
	country: text("name"),
	created_at: timestamp("created_at"),
});

export const donorsTable = pgTable("donors", {
	id: serial("id").primaryKey(),
	name: text("name"),
	email: text("email"),
	phone_number: text("phone_number"),
	country: text("country"),
	amount: numeric("amount"),
	message: text("message"),
	receive_updates: boolean("receive_update"),
	anonymous: boolean("anonymous"),
	created_at: timestamp("created_at").defaultNow(),
});

export type InsertClick = typeof clicksTable.$inferInsert;
export type SelectClick = typeof clicksTable.$inferSelect;
export type InsertDonors = typeof donorsTable.$inferInsert;
export type SelectDonors = typeof donorsTable.$inferSelect;
