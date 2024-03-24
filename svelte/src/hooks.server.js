import { SECRET_TOKEN_COOKIE } from '$env/static/private'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.token = event.cookies.get(SECRET_TOKEN_COOKIE)
    return await resolve(event);
}