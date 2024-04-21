import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies, params}) => {
    await parent();

    try {
        const [animal, examinations] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/' + params.id, cookies),
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animal-examinations/animal/' + params.id, cookies)
        ])

        console.log('/animal-examinations-service/v1/animal-examinations/animal/' + params.id)
        console.log(examinations)

        return {
            animal,
            examinations
        }
    }
    catch (e) {
        redirect(302, '/animals')
        // return {
        //     status: 500,
        //     error: e
        // }
    }
}

export const actions = {
    default: async ({request, cookies,params}) => {
        const formData = await request.formData();

        const body = {
            name: formData.get('name'),
            species: formData.get('species'),
            sex: formData.get('sex'),
            birthDate: formData.get('birthDate'),
            deathDate: formData.get('deathDate'),
            owner: formData.get('owner'),
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

        console.log(body)

        const res = await fetch(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/' + params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            return {success: false, reason: "unknown"}
        }

        return {success: true}
    }
}