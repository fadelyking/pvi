import { d as db, c as clicksTable, a as donorsTable } from './schema-BM_EfnOM.js';
import { eq } from 'drizzle-orm';
import 'drizzle-orm/neon-http';
import '@neondatabase/serverless';
import 'dotenv';
import 'drizzle-orm/pg-core';

const load = async ({ url }) => {
  const firstCountry = url.searchParams.get("q1") ?? "IR";
  const secondCountry = url.searchParams.get("q2") ?? "IL";
  return {
    q1: firstCountry,
    q2: secondCountry,
    clicks: await db.select().from(clicksTable),
    firstCountry: await db.select().from(clicksTable).where(eq(clicksTable.country, firstCountry)),
    secondCountry: await db.select().from(clicksTable).where(eq(clicksTable.country, secondCountry)),
    donors: await db.select().from(donorsTable),
    donorsFirstCountry: await db.select().from(donorsTable).where(eq(donorsTable.country, firstCountry)),
    donorsSecondCountry: await db.select().from(donorsTable).where(eq(donorsTable.country, secondCountry))
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-D5t4jkkt.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.Cz95vqM0.js","_app/immutable/chunks/scheduler.B9Ig1-Ls.js","_app/immutable/chunks/index.CCL0Cr32.js","_app/immutable/chunks/ISOToName.C_PzhHOZ.js"];
const stylesheets = ["_app/immutable/assets/0.CQRxatSk.css","_app/immutable/assets/ISOToName.Btoc6Gi4.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-eUffXf3t.js.map
