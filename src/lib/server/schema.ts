import { pgTable, timestamp, text, serial } from "drizzle-orm/pg-core";

export const clicksTable = pgTable("clicks", {
	id: serial("id").primaryKey(),
	country: text("name"),
	created_at: timestamp("created_at"),
});

export type InsertClick = typeof clicksTable.$inferInsert;
export type SelectClick = typeof clicksTable.$inferSelect;
