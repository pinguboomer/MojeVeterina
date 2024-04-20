import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies, params}) => {
    await parent();

    try {
        const [customer, animals] = await Promise.all([
            fetchData(env.SECRET_API_URL + `/users-service/v1/users/${params.customer_id}`, cookies),
            fetchData(env.SECRET_API_URL + `/animal-examinations-service/v1/animals/client/${params.customer_id}`, cookies),
        ])

        return {
            customer,
            animals,
        }
    }
    catch (e) {
        console.error(e)
        redirect(302, '/customers')
        // return {
        //     status: 500,
        //     error: e
        // }
    }
}

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();

        if (formData.get('id')?.length === 0 || formData.get('name')?.length === 0 || formData.get('surname')?.length === 0 || formData.get('email')?.length === 0) {
            return {success: false, reason: "empty"}
        }

        const body = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            zip_code: formData.get('zip'),
            city: formData.get('city'),
            role: formData.get('role')
        }

        if (body.phone === '') {
            body.phone = null
        }
        if (body.address === '') {
            body.address = null
        }
        if (body.zip_code === '') {
            body.zip_code = null
        }
        if (body.city === '') {
            body.city = null
        }

        const res = await fetch(env.SECRET_API_URL + `/users-service/v1/users/${formData.get('id')}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            return { success: false, reason: "unknown" }
        }

        return { success: true }
    }
}