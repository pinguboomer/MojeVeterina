/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ parent }) => {
    await parent()
}
