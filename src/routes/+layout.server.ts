import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    
    if (user) {

        return {
            user
        };
    }
   
};
import type { Config } from '@sveltejs/adapter-vercel';
export const config: Config = {
    runtime: 'edge'
};

