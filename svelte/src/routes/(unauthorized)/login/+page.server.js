import { SECRET_API_URL, TOKEN_COOKIE_NAME } from '$env/static/private'
import {redirect} from "@sveltejs/kit";


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

        cookies.set(TOKEN_COOKIE_NAME, data.token, {
            path: '/',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true
        })

        locals.user = data.token

        redirect(302, '/');
    },
};