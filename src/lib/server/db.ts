import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
config({ path: ".env" });

export const sql = neon(process.env.DB_URL!);

export const db = drizzle(sql);
