/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ parent, cookies, url,locals }) => {
    await parent()

    console.log(url.searchParams.get('date'))
    console.log(locals.user)
}
