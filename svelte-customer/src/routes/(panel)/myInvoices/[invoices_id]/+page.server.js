import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */

export const load = async ({parent, cookies, params, locals}) => {
    await parent();

    try {
        const [invoice, user] = await Promise.all([
            fetchData(env.SECRET_API_URL + `/invoices-service/v1/invoices/` + params.invoices_id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME)),
            locals.user
        ])

        if (invoice._id !== params.invoices_id) {
            redirect(302, '/myInvoices')
        } else {
            return {invoice, user}
        }


    } catch (e) {
        redirect(302, '/myInvoices')
    }
}