// import {env} from "$env/dynamic/private";
// import {redirect} from "@sveltejs/kit";
// import {fetchData} from "$lib/server/fetchData.js";
//
//
// /** @type {import('@sveltejs/kit').Load} */
// export const load = async ({parent, cookies}) => {
//     await parent()
//
//
//     try {
//
//         let date = new Date();
//         date.setHours(0, 0, 0);
//
//
//         const [animals, reservations, users] = await Promise.all([
//             fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals', cookies),
//             fetchData(env.SECRET_API_URL + '/reservations-service/v1/reservations/date/' + date, cookies),
//             fetchData(env.SECRET_API_URL + '/users-service/v1/users?role=CUSTOMER', cookies)
//         ])
//
//         return {
//             animals,
//             reservations,
//             users
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }