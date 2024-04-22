import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";
import {getUserFromToken} from "$lib/server/getUserFromToken.js";

/** @type {import('../../../../../.svelte-kit/types/src/routes').PageServerLoad} */
export const load = async ({parent, cookies, locals}) => {
    await parent();

    try {
        const [user] = await Promise.all([
            fetchData(env.SECRET_API_URL + `/users-service/v1/users/${locals.user._id}`, cookies),
        ])

        return {
            user,
        }
    }
    catch (e) {
        console.error(e)
        redirect(302, '/')
        // return {
        //     status: 500,
        //     error: e
        // }
    }
}

export const actions = {
    updateUser: async ({ request, cookies }) => {
        const formData = await request.formData();

        if (formData.get('name')?.length === 0 || formData.get('surname')?.length === 0) {
            return {success: false, reason: "empty"}
        }

        const user = getUserFromToken(cookies.get(env.SECRET_TOKEN_COOKIE_NAME))

        const body = {
            email: user.email,
            name: formData.get('name'),
            surname: formData.get('surname'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            zip_code: formData.get('zip'),
            city: formData.get('city'),
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

        const res = await fetch(env.SECRET_API_URL + `/users-service/v1/users/${user._id}`, {
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
    },
    changePassword: {

    }
}