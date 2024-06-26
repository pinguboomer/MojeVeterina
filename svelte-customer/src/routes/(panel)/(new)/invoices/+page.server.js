import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */

export const load = async ({parent, cookies, locals}) => {
    await parent();

    try {
        return {
            invoices: await fetchData(env.SECRET_API_URL + '/invoices-service/v1/invoices/client/' + locals.user._id, cookies)
        }
    } catch (e) {
        redirect(302, '/')
    }
}