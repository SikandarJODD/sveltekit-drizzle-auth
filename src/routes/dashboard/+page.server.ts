import type { PageServerLoad } from "../$types";



export const load: PageServerLoad = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    if (user !== null) {
        return { user }
    }
    return {
        user: null
    }

};