import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";
import {getUserFromToken} from "$lib/server/getUserFromToken.js";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent }) => {
    await parent();
}

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const user = getUserFromToken(cookies.get(env.SECRET_TOKEN_COOKIE_NAME))

        const body = {
            name: formData.get('name'),
            species: formData.get('species'),
            sex: formData.get('sex'),
            birthDate: formData.get('birthDate'),
            deathDate: formData.get('deathDate'),
            owner: user._id,
        }

        if (body.name === '') {
            delete body.name
        }
        if (body.sex === '') {
            delete body.sex
        }
        if (body.birthDate === '') {
            delete body.birthDate
        }
        if (body.deathDate === '') {
            delete body.deathDate
        }

        const res = await fetch(env.SECRET_API_URL + '/animal-examinations-service/v1/animals', {
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

        return { success: true, redirect: `/animals/${data._id}` }
    }
}