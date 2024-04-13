import {env} from "$env/dynamic/private";

export function checkTokenExpiration(res, cookies) {
    if (res.status === 401 || res.status === 403) {
        cookies.delete(env.SECRET_TOKEN_COOKIE_NAME, {
            path: env.SECRET_COOKIE_PATH,
            sameSite: env.SECRET_COOKIE_SAME_SITE,
            secure: !!env.SECRET_COOKIE_SECURE,
            httpOnly: !!env.SECRET_COOKIE_HTTP_ONLY,
        })
        return {
            redirect: {
                statusCode: 302,
                location: '/nove-umisteni'
            }
        }
    }
    return undefined
}