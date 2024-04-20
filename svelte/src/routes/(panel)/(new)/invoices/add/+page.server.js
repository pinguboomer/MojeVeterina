import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent, cookies }) => {
    await parent();

    try {
        const [customers] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/users-service/v1/users?role=CUSTOMER', cookies)
        ])

        return {
            customers
        }
    }
    catch (e) {
        redirect(302, '/customers/')
        // return {
        //     status: 500,
        //     error: e
        // }
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

        redirect(302, `/invoices/${data._id}`)
        console.log("REDIRECT TO INVOICE")
        return { success: true, redirect: `/invoices/${data._id}`}
    }
}