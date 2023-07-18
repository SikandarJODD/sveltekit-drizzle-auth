import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { auth } from "$lib/server/lucia";
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ locals }) => {
        const { session } = await locals.auth.validateUser();
        if (!session) return fail(401);
        await auth.invalidateSession(session.sessionId); // invalidate session
        locals.auth.setSession(null); // remove cookie
    }
};