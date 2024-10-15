import { d as db, c as clicksTable, a as donorsTable } from './schema-BM_EfnOM.js';
import 'drizzle-orm/neon-http';
import '@neondatabase/serverless';
import 'dotenv';
import 'drizzle-orm/pg-core';

const actions = {
  click: async ({ request }) => {
    const formData = await request.formData();
    const iso = formData.get("iso");
    if (String(iso).length !== 2 || !iso) {
      return { status: 400, body: "Invalid ISO" };
    }
    try {
      await db.insert(clicksTable).values({
        country: iso.toString(),
        created_at: /* @__PURE__ */ new Date()
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
        email,
        phone_number: phoneNumber,
        amount,
        message,
        country,
        receive_updates: receiveUpdates,
        anonymous
      });
      console.log("Donation record inserted successfully.");
      return {
        success: true,
        message: "Donation submitted successfully."
      };
    } catch (error) {
      console.error("Database insert error: ", error);
      return { success: false, error: "Failed to insert donation data" };
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-g1aKJG94.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.BSxbSDnP.js","_app/immutable/chunks/scheduler.B9Ig1-Ls.js","_app/immutable/chunks/index.CCL0Cr32.js","_app/immutable/chunks/ISOToName.C_PzhHOZ.js","_app/immutable/chunks/entry.C9UphgoM.js"];
const stylesheets = ["_app/immutable/assets/2.CG4tPKew.css","_app/immutable/assets/ISOToName.Btoc6Gi4.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-CgMXfR_S.js.map
