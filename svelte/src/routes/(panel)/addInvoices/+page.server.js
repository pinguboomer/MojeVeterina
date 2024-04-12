import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent, cookies }) => {
    await parent();

    async function loadOwners() {
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
        owners: loadOwners()
    }
}

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        let items = [];
        for (let i = 0 ; i< formData.get('number_items'); i++){
            let item = {
                name: formData.get('item_name_' + i),
                price: formData.get('item_price_' + i),
                quantity: formData.get('item_quantity_' + i)
            }
            items.push(item);
        }

        const body = {
            client: formData.get('client'),
             items: items
        }

        console.log(body)

        const res = await fetch(env.SECRET_API_URL + '/invoices-service/v1/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            return { success: false, reason: "unknown" }
        }

        const data = await res.json()

        return { success: true, redirect: `/addInvoices/${data._id}`}
    }
}