import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */

export const load = async ({parent,cookies, locals}) => {
    await parent();

    try {
        return{
            animals: await fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/client/' + locals.user._id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME))
        }

    } catch (e) {
        console.log(e);
        redirect(302, '/')
    }
}