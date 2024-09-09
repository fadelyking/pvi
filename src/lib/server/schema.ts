import { pgTable, timestamp, text } from "drizzle-orm/pg-core";

export const clicksTable = pgTable("clicks", {
	country: text("name"),
	created_at: timestamp("created_at"),
});

export type InsertClick = typeof clicksTable.$inferInsert;
export type SelectClick = typeof clicksTable.$inferSelect;
