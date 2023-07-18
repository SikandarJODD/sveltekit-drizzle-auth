import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { goto } from "$app/navigation";

export const load: LayoutServerLoad = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    
    if (user) {

        return {
            user
        };
    }
   
};
