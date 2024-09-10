import { pgTable, timestamp, text, serial, numeric } from "drizzle-orm/pg-core";

export const clicksTable = pgTable("clicks", {
	id: serial("id").primaryKey(),
	country: text("name"),
	created_at: timestamp("created_at"),
});

export const progressTable = pgTable("progress", {
	id: serial("id").primaryKey(),
	progress: numeric("progress"),
	last_updated: timestamp("last_updated").defaultNow(),
});

export type InsertClick = typeof clicksTable.$inferInsert;
export type SelectClick = typeof clicksTable.$inferSelect;
