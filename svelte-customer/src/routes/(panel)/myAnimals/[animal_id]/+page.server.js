import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies, params, locals}) => {
    await parent();

    try {
        const [owners, animal, examinations] = await Promise.all([
           locals.user,
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/' + params.animal_id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME)),
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animal-examinations/animal/' + params.animal_id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME))
        ])

        return {
            owners,
            animal,
            examinations
        }
    }
    catch (e) {
        redirect(302, '/myAnimals')
    }
}
