// place files you want to import through the `$lib` alias in this folder.
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { DATABASE_URL } from '$env/static/private'

const migrationClient = postgres(DATABASE_URL, { max: 1 });
migrate(drizzle(migrationClient), {
    migrationsFolder:'./drizzle'
})
const client = postgres(DATABASE_URL);
export const db = drizzle(client);
