import { SECRET_API_URL } from '$env/static/private'
import {redirect} from "@sveltejs/kit";


/** @type {import('./$types').Actions} */
export const actions = {    // TODO: Implement proper registration
    default: async ({ request }) => {
        const formData = await request.formData();

        if (formData.get('password') !== formData.get('password2')) {
            return { success: false, reason: "password_not_match" }
        }

        const body = {
            "typ": "CUSTOMER",
            "name": formData.get('firstName'),
            "surname": formData.get('lastName'),
            "email": formData.get('email'),
            "password": formData.get('password'),
            "phone": formData.get('phone'),
            "address": formData.get('address'),
            "city": formData.get('city'),
            "zip_code": formData.get('zipCode'),
        }

        const res = await fetch(SECRET_API_URL + '/users-service/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            if (res.status === 409) {
                return { success: false, reason: "email_exists" }
            }

            return { success: false, reason: null }
        }

        redirect(302, '/login');
    },
};