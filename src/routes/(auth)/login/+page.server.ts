import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions } from './$types';
import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";


const schema = z.object({
    email: z.string().email(),
    password: z.string()
});

export const load = (async ({ locals }) => {
    // Server API:
    const form = await superValidate(schema);
    // const { user } = await locals.auth.validateUser();
    // if (user !== null) {
    //     throw redirect(302, '/dashboard')
    // }
    // Always return { form } in load and form actions.
    return { form };
});

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const form = await superValidate(request, schema);

        if (!form.valid) {
            return fail(400, { form });
        }
        try {
            const key = await auth.useKey("email", form.data.email, form.data.password);
            const session = await auth.createSession(key.userId);
            locals.auth.setSession(session);
        } catch {
            // invalid username/password
            return fail(400);
        }
        finally {
            throw redirect(302, '/dashboard')
        }
        return { form };
    }
};