import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";


/** @type {import('./$types').PageServerLoad} */
export const load = async ({ parent, cookies, params }) => {
    await parent();

    try {
        const [examination, animal] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animal-examinations/' + params.examination_id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME)),
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/' + params.animal_id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME))
        ])

        if (examination.animal !== params.animal_id) {
            redirect(302, '/myAnimals/' + params.animal_id)
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