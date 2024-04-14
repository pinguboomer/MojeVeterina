import {env} from "$env/dynamic/private";
import {fetchData} from "$lib/server/fetchData.js";
import {redirect} from "@sveltejs/kit";

export const load = async ({parent, cookies, locals}) => {
    await parent();

    try {
        const [animals, reservations] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/client/' + locals.user._id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME)),
            fetchData(env.SECRET_API_URL + '/reservations-service/v1/reservations/client/' + locals.user._id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME))
        ])

        return {
            animals,
            reservations
        }
    } catch (e) {
        console.log(e)
        redirect(301, '/myAnimals')
    }
}