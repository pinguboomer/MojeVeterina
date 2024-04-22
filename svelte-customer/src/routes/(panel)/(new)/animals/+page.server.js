import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies, locals}) => {
    await parent();

    try {
        const [animals] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/client/' + locals.user._id, cookies)
        ])

        return {
            animals
        }
    }
    catch (e) {
        redirect(302, '/')
        // return {
        //     status: 500,
        //     error: e
        // }
    }
}