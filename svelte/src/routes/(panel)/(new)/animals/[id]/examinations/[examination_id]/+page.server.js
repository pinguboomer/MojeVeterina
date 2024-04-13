import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent, cookies, params }) => {
    await parent();

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

    async function loadExamination() {
        const res = await fetch(env.SECRET_API_URL + '/animal-examinations-service/v1/animal-examinations/' + params.examination_id, {
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
        animal:await loadAnimals(),
        examination: await loadExamination()
    }
}

export const actions = {
    default: async ({ request, cookies, params }) => {
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

        const res = await fetch(env.SECRET_API_URL + '/animal-examinations-service/v1/animal-examinations/' + params.examination_id, {
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

       // const data = await res.json()

        return { success: true, redirect: `/animals/${body.animal}/examinations/` + params.examination_id}
    }
}