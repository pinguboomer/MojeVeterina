import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies}) => {
    await parent();

    try {
        const [owners, animals] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/users-service/v1/users?role=CUSTOMER', cookies),
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/', cookies)
        ])

        return {
            owners,
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