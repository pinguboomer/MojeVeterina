import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";

export async function fetchData(url, cookies) {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
        }
    })
    // throw new Error('Failed to load data from ' + url);
    if (!res.ok) {
        if (res.status === 401) {
            cookies.delete(env.SECRET_TOKEN_COOKIE_NAME, {
                path: env.SECRET_COOKIE_PATH,
                sameSite: env.SECRET_COOKIE_SAME_SITE,
                secure: !!env.SECRET_COOKIE_SECURE,
                httpOnly: !!env.SECRET_COOKIE_HTTP_ONLY,
            })
            redirect(302, '/login')
        }

        throw new Error('Failed to load data from ' + url);
    }
    else {
        return await res.json()
    }
}