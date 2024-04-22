import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";
import {fetchData} from "$lib/server/fetchData.js";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent, cookies,params }) => {
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


export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();

        const id = formData.get('id')

        const res = await fetch(env.SECRET_API_URL + `/invoices-service/v1/invoices/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            },
        })

        if (!res.ok) {
            return { success: false, reason: "unknown" }
        }

        return { success: true }
    }
}