import {env} from "$env/dynamic/private";
import {redirect} from "@sveltejs/kit";
import {fetchData} from "$lib/server/fetchData.js";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ parent, cookies, url,locals }) => {
    await parent()

    try {
        return{
            animals: await fetchData(env.SECRET_API_URL + '/animal-examinations-service/v1/animals/client/'+ locals.user._id, cookies.get(env.SECRET_TOKEN_COOKIE_NAME))
        }
    }catch (e) {
        console.log(e)
        redirect(301, '/')
    }

    console.log(url.searchParams.get('date'))
    console.log(locals.user)
}

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        console.log(formData.get('date'))

        const token = cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
        const payload = token.split('.')[1]
        const base64 = payload.replace('-', '+').replace('_', '/')
        const decoded = JSON.parse(atob(base64))

        const body = {
            user: decoded._id,
            date: formData.get('date'),
            animal: formData.get('animal'),
            reason: formData.get('reason')
        }

        console.log(body)

        //TODO ověřit zda neexistuje už registrace na daný termín

        const res = await fetch(env.SECRET_API_URL + '/reservations-service/v1/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get(env.SECRET_TOKEN_COOKIE_NAME)
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            return { success: false, reason: "unknown" }
        }

        const data = await res.json()

        return { success: true, redirect: `/` }
    }
}