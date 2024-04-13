import { SECRET_API_URL, SECRET_TOKEN_COOKIE_NAME, SECRET_GOOGLE_CLIENT_ID, SECRET_GOOGLE_REDIRECT_URI } from '$env/static/private'
import {redirect} from "@sveltejs/kit";
import {env} from "$env/dynamic/private";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => { //profile email
    return {
        googleLoginUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${SECRET_GOOGLE_CLIENT_ID}&redirect_uri=${SECRET_GOOGLE_REDIRECT_URI}&response_type=code&access_type=offline&scope=email profile`
    }
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies, locals }) => {  // TODO implement proper login
        const formData = await request.formData();

        const body = {
            email: formData.get('email'),
            password: formData.get('password'),
            extend: formData.get('extend') === "on",
        }

        console.log(body)

        const res = await fetch(SECRET_API_URL + '/users-service/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            return { success: false }
        }

        const data = await res.json()

        cookies.set(SECRET_TOKEN_COOKIE_NAME, data.token, {
            path: env.SECRET_COOKIE_PATH,
            sameSite: env.SECRET_COOKIE_SAME_SITE,
            secure: !!env.SECRET_COOKIE_SECURE,
            httpOnly: !!env.SECRET_COOKIE_HTTP_ONLY,
            maxAge: parseInt(env.SECRET_COOKIE_MAX_AGE),
        })

        locals.user = data.token

        await redirect(302, '/');
    },
};