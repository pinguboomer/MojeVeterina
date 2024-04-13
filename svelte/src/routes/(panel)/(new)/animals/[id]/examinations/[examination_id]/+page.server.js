import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {error, redirect} from "@sveltejs/kit";
import {getUserFromToken} from "$lib/server/getUserFromToken.js";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent, cookies, params }) => {
    await parent();

    try {
        const [examination, animal] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animal-examinations/' + params.examination_id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME)),
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/' + params.id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME))
        ])

        if (examination.animal !== params.id) {
            redirect(302, '/animals/' + params.id + '/examinations')
        }
        else {
            return {
                animal,
                examination
            }
        }
    }
    catch (e) {
        redirect(302, '/animals/' + params.id + '/examinations')
        // return {
        //     status: 500,
        //     error: e
        // }
    }
}

export const actions = {
    default: async ({ request, cookies, params }) => {
        const formData = await request.formData();

        console.log(formData.get('animal'))

        const body = {
            author: getUserFromToken(cookies.get(env.SECRET_TOKEN_COOKIE_NAME))._id,
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

        return {
            success: true,
            redirect: `/animals/${body.animal}/examinations/` + params.examination_id
        }
    }
}