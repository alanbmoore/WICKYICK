import Typesense from "typesense";
import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

const client = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST || "localhost",
      port: process.env.TYPESENSE_PORT
        ? parseInt(process.env.TYPESENSE_PORT)
        : 8108,
      protocol: process.env.TYPESENSE_PROTOCOL || "https",
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY || "xyz",
  connectionTimeoutSeconds: process.env.TYPESENSE_CONNECTION_TIMEOUT_SECONDS
    ? parseInt(process.env.TYPESENSE_CONNECTION_TIMEOUT_SECONDS)
    : 2,
});

(async () => {
  try {
    const collections = await client.collections().retrieve();
    if (collections.length === 0) {
      const profilesCollection = collections.find((c) => c.name === "profiles");

      if (!profilesCollection) {
        const profileSnapshot: CollectionCreateSchema = {
          name: "profiles",
          fields: [
            { name: "uid", type: "string" },
            { name: "first_name", type: "string" },
            { name: "last_name", type: "string" },
            { name: "company", type: "string" },
            { name: "site_username", type: "string" },
            { name: "picture", type: "string" },
          ],
        };

        client.collections().create(profileSnapshot);
      }
    }
  } catch (error) {}
})();

export default client;
