import { SECRET_API_URL } from '$env/static/private'


/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        const formData = await request.formData();

        const body = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const res = await fetch(SECRET_API_URL + '/users-service/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            return { success: false }
        }

        const data = await res.json()
        console.log(data)
        return { success: true }
    },
};