import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

export const load = async ({parent, cookies, locals}) => {
    await parent();

    try {
        const [animals, reservations] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/client/' + locals.user._id, cookies),
            fetchData(env.SECRET_API_URL + '/reservations-service/v1/reservations/client/' + locals.user._id, cookies)
        ])

        return {
            animals,
            reservations
        }
    } catch (e) {
        cookies.delete(env.SECRET_TOKEN_COOKIE_NAME, {
            path: env.SECRET_COOKIE_PATH,
            sameSite: env.SECRET_COOKIE_SAME_SITE,
            secure: !!env.SECRET_COOKIE_SECURE,
            httpOnly: !!env.SECRET_COOKIE_HTTP_ONLY,
        })
        redirect(302, '/login');
    }
}

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();

        const res = await fetch(env.SECRET_API_URL + '/reservations-service/v1/reservations/' + formData.get('id'), {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            },
        })

        if (!res.ok) {
            return { success: false, reason: "unknown" }
        }

        return { success: true, removeId: formData.get('id') }
    }
}