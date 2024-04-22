import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */

export const load = async ({parent, cookies, params, locals}) => {
    await parent();

    try {
        const [invoice] = await Promise.all([
            fetchData(env.SECRET_API_URL + `/invoices-service/v1/invoices/` + params.invoices_id, cookies),
        ])

        return {
            invoice,
            user: locals.user
        }
    } catch (e) {
        console.log(e)
        redirect(302, '/invoices')
    }
}