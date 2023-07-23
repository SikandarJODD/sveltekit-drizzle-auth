import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import type { Config } from '@sveltejs/adapter-vercel';
export const load: LayoutServerLoad = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    
    if (user) {

        return {
            user
        };
    }
   
};

export const config: Config = {
    runtime: 'edge'
};
