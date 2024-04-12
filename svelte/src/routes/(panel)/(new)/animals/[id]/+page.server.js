import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies, params}) => {
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
        } else {
            return await res.json()
        }
    }

    async function loadAnimals() {
        const res = await fetch(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/' + params.id, {
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
        owners: loadOwners(),
        animal: await loadAnimals(),
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

        const data = await res.json()

        return {success: true, redirect: `/animals/${data._id}`}
    }
}