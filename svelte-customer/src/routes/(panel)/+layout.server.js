import { SECRET_TOKEN_COOKIE_NAME } from '$env/static/private'
import {Base64} from "js-base64";
import {redirect} from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals, cookies }) => {
    console.log("LAYOUT AUTH LOAD")

    if (!cookies.get(SECRET_TOKEN_COOKIE_NAME)) {
        console.log('No token')
        redirect(302, '/login')
    }

    const data = cookies.get(SECRET_TOKEN_COOKIE_NAME).split('.')[1]
    if (!data) {
        redirect(302, '/login')
    }

    const user = JSON.parse(Base64.decode(data))
    // Check if jwt token is expired
    if (!user || user.exp < Date.now() / 1000){
        console.log('Token expired')
        redirect(302, '/login')
    }
    locals.user = user

    return {user}
}
