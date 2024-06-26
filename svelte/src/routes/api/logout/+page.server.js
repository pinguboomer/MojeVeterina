import {redirect} from "@sveltejs/kit";
import {env} from "$env/dynamic/private";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies }) => {
        cookies.delete(env.SECRET_TOKEN_COOKIE_NAME, {
            path: env.SECRET_COOKIE_PATH,
            sameSite: env.SECRET_COOKIE_SAME_SITE,
            secure: !!env.SECRET_COOKIE_SECURE,
            httpOnly: !!env.SECRET_COOKIE_HTTP_ONLY,
        })
        redirect(302, '/login');
    },
};