import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */

export const load = async ({ parent, cookies }) => {
    await parent();

    async function loadInvoices() {
        const res = await fetch(env.SECRET_API_URL + '/invoices-service/v1/invoices', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            }
        })

        if (!res.ok) {
            redirect(302, '/')
        }
        else {
            return await res.json()
        }
    }

    async function loadClients() {
        const res = await fetch(env.SECRET_API_URL + '/users-service/v1/users?role=CUSTOMER', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            }
        })

        if (!res.ok) {
            redirect(302, '/')
        }
        else {
            return await res.json()
        }
    }

    return {
        invoices: loadInvoices(),
        clients: await loadClients()
    }
}
