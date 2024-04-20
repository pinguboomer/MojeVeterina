import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";
import {fetchData} from "$lib/server/fetchData.js";

/** @type {import('./$types').PageServerLoad} */

export const load = async ({parent, cookies, params}) => {
    await parent();

    try {
        const [invoice] = await Promise.all([
            fetchData(env.SECRET_API_URL + `/invoices-service/v1/invoices/`+ params.invoices_id, cookies)
        ])

        const client = await fetchData(env.SECRET_API_URL + '/users-service/v1/users/' + invoice.client, cookies)

        return {
            client,
            invoice
        }
    }
    catch (e) {
        console.error(e)
        redirect(302, '/invoices')
        // return {
        //     status: 500,
        //     error: e
        // }
    }
}