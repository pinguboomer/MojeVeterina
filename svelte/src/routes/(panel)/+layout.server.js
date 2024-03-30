import { SECRET_TOKEN_COOKIE_NAME } from '$env/static/private'
import {redirect} from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ cookies }) => {
    console.log("LAYOUT AUTH LOAD")

    if (!cookies.get(SECRET_TOKEN_COOKIE_NAME)) {
        redirect(302, '/login');
    }

    return {}
}
