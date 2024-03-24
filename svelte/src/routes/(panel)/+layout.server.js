import { TOKEN_COOKIE_NAME } from '$env/static/private'
import {redirect} from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ cookies }) => {
    if (!cookies.get(TOKEN_COOKIE_NAME)) {
        redirect(302, '/');
    }

    return {}
}
