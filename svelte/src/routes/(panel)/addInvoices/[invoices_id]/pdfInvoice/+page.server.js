import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */

export const load = async ({parent, cookies, params}) => {
    await parent();

    async function loadInvoice() {
        const res = await fetch(env.SECRET_API_URL + `/invoices-service/v1/invoices/` + params.invoices_id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            }
        })

        if (!res.ok) {
            redirect(302, '/')
        } else {
            return await res.json()
        }
    }

    async function loadClient() {
       const invoice = await loadInvoice();
       console.log(invoice.client)
        const res = await fetch(env.SECRET_API_URL + `/users-service/v1/users/${invoice.client}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            }
        })

        if (!res.ok) {
            redirect(302, '/')
        } else {
            return await res.json()
        }
    }



    return {
        invoice: loadInvoice(),
        client: loadClient()
    }
}