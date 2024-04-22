import {SECRET_API_URL, SECRET_TOKEN_COOKIE_NAME} from '$env/static/private'
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, cookies, locals }) => {
    const res = await fetch(SECRET_API_URL + '/users-service/v1/auth/google/callback' + url.search, {method: "POST"})

    if (!res.ok) {
        throw new Error('GOOGLE ERROR' + res.statusText)
    }

    const data = await res.json()

    cookies.set(SECRET_TOKEN_COOKIE_NAME, data.token, {
        path: '/',
        sameSite: 'Lax',
        maxAge: 60 * 60 * 24 * 7,
        secure: false,
        httpOnly: true
    })

    locals.user = data.token

    redirect(302, '/');

    // return {
    //     url: url.search
    // }
}