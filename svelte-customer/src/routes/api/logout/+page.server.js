import { TOKEN_COOKIE_NAME } from '$env/static/private'
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies }) => {
        cookies.delete(TOKEN_COOKIE_NAME, {
            path: '/',
            sameSite: 'Lax',
            secure: false,
            httpOnly: true
        })
        redirect(302, '/login');
    },
};