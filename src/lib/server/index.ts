// place files you want to import through the `$lib` alias in this folder.
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private'

const client = postgres(DATABASE_URL);
export const db = drizzle(client);
