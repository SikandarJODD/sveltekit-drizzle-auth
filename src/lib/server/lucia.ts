import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { dev } from '$app/environment';
import { pg } from "@lucia-auth/adapter-postgresql";
import postgres from "pg";
import { DATABASE_URL } from '$env/static/private'
const pool = new postgres.Pool({
    connectionString: DATABASE_URL
});
export const auth = lucia({
    adapter: pg(pool),
    env: dev ? 'DEV' : 'PROD',
    middleware: sveltekit(),
    transformDatabaseUser: (data) => {
        return {
            userId: data.id,
            email: data.email
        };
    }
});
export type Auth = typeof auth;
