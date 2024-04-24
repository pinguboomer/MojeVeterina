import {SECRET_API_URL, SECRET_TOKEN_COOKIE_NAME} from '$env/static/private'
import {redirect} from "@sveltejs/kit";
import {env} from "$env/dynamic/private";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, cookies, locals }) => {
    const res = await fetch(SECRET_API_URL + '/users-service/v1/auth/google/callback' + url.search + '&mv_redirect=http://localhost:5173/api/auth/google/callback', {method: "POST"})

    if (!res.ok) {
        throw new Error('GOOGLE ERROR', res.status, res.statusText)
    }

    const data = await res.json()

    cookies.set(SECRET_TOKEN_COOKIE_NAME, data.token, {
        path: env.SECRET_COOKIE_PATH,
        sameSite: env.SECRET_COOKIE_SAME_SITE,
        secure: env.SECRET_COOKIE_SECURE === "true",
        httpOnly: env.SECRET_COOKIE_HTTP_ONLY === "true",
        maxAge: parseInt(env.SECRET_COOKIE_MAX_AGE),
    })

    locals.user = data.token

    redirect(302, '/');

    // return {
    //     url: url.search
    // }
}