import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";
import {fetchData} from "$lib/server/fetchData.js";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ parent, cookies, url}) => {
    await parent()

    let date;
    try {
        if (!url.searchParams.get('date')) {
            date = new Date();
            date.setHours(0, 0, 0);
        } else {
            date = url.searchParams.get('date');
        }

        const [animals, reservations, users] = await Promise.all([
            fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals', cookies),
            fetchData(env.SECRET_API_URL + '/reservations-service/v1/reservations/date/' + date, cookies),
            fetchData(env.SECRET_API_URL + '/users-service/v1/users', cookies) //?role=CUSTOMER
        ])

        return {
            animals,
            reservations,
            users
        }
    } catch (e) {
        redirect(302, '/')
    }
}
