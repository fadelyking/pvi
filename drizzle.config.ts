import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({ path: ".env" });

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/lib/server/schema.ts",
	out: "./drizzle",
	dbCredentials: {
		url: process.env.DB_URL!,
	},
});
