import {SECRET_API_URL, SECRET_TOKEN_COOKIE_NAME} from '$env/static/private'
import {redirect} from "@sveltejs/kit";
import {env} from "$env/dynamic/private";
import {getUserFromToken} from "$lib/server/getUserFromToken.js";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, cookies, locals }) => {
    const res = await fetch(SECRET_API_URL + '/users-service/v1/auth/google/callback' + url.search + '&mv_redirect=' + env.SECRET_GOOGLE_REDIRECT_URI, {method: "POST"})

    if (!res.ok) {
        throw new Error('GOOGLE ERROR' + res.statusText)
    }

    const data = await res.json()

    const user = getUserFromToken(data.token)

    if (user.role === 'CUSTOMER') {
        redirect(302, '/login')
        return
        // return { success: false }
    }

    console.log(data)

    cookies.set(SECRET_TOKEN_COOKIE_NAME, data.token, {
        path: env.SECRET_COOKIE_PATH,
        sameSite: env.SECRET_COOKIE_SAME_SITE,
        secure: env.SECRET_COOKIE_SECURE === "true",
        httpOnly: env.SECRET_COOKIE_HTTP_ONLY === "true",
        maxAge: parseInt(env.SECRET_COOKIE_MAX_AGE),
    })

    redirect(302, '/');

    // return {
    //     url: url.search
    // }
}