import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { pgTable, serial, text, timestamp, numeric, boolean } from 'drizzle-orm/pg-core';

config({ path: ".env" });
const sql = neon(process.env.DB_URL);
const db = drizzle(sql);
const clicksTable = pgTable("clicks", {
  id: serial("id").primaryKey(),
  country: text("name"),
  created_at: timestamp("created_at")
});
const donorsTable = pgTable("donors", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  phone_number: text("phone_number"),
  country: text("country"),
  amount: numeric("amount"),
  message: text("message"),
  receive_updates: boolean("receive_update"),
  anonymous: boolean("anonymous"),
  created_at: timestamp("created_at").defaultNow()
});

export { donorsTable as a, clicksTable as c, db as d };
//# sourceMappingURL=schema-BM_EfnOM.js.map
