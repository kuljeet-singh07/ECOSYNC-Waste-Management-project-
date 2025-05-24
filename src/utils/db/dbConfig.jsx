import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_fULSw3YmAjI1@ep-icy-firefly-a5k0ls2g-pooler.us-east-2.aws.neon.tech/ecosync?sslmode=require"
);

export const db = drizzle(sql, { schema });


console.log('Connected to the database!',db);

