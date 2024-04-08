import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent, cookies, params }) => {
    await parent();

    const res = await fetch(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/' + params.id, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
        }
    })

    if (!res.ok) {
        if (res.status === 404) {
            redirect(302, '/animals/' + params.id)
        }

        redirect(302, '/')
    }

    const data = await res.json()

    return {
        animal: data
    }
}

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();

        // Extract author from token cookie
        const token = cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
        const payload = token.split('.')[1]
        const base64 = payload.replace('-', '+').replace('_', '/')
        const decoded = JSON.parse(atob(base64))

        const body = {
            author: decoded._id,
            animal: formData.get('animal'),
            date: formData.get('date'),
            subject: formData.get('subject'),
            weight: formData.get('weight'),
            diagnose: formData.get('diagnose'),
            recommendation: formData.get('recommendation'),
            text: formData.get('text'),
        }

        if (body.weight === '') {
            delete body.weight
        }
        if (body.text === '') {
            delete body.text
        }
        if (body.recommendation === '') {
            delete body.recommendation
        }

        console.log(body)

        const res = await fetch(env.SECRET_API_URL + '/animal-examinations-service/v1/animal-examinations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            console.log(res.status)
            return { success: false, reason: "unknown" }
        }

        const data = await res.json()

        return { success: true, redirect: `/animals/${body.animal}/examinations/${data._id}` }
    }
}