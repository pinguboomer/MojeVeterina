import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies, params}) => {
    await parent();

    try {
        const [examinations] = await Promise.all([
            fetchData(env.SECRET_API_URL + `/animal-examinations-service/v1/animal-examinations/animal/${params.id}`, cookies)
        ])

        return {
            examinations
        }
    }
    catch (e) {
        redirect(302, '/animals/' + params.id)
        // return {
        //     status: 500,
        //     error: e
        // }
    }
}