import { auth } from "$lib/server/lucia";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";



export const load: PageServerLoad = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    return { user }

};