import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({parent, cookies}) => {
    await parent();

    try {
        const [staff] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/users-service/v1/users?role=ADMIN', cookies),
        ])

        return {
            staff
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