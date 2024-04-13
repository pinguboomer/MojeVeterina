export function errorMessage(status) {
    if (status === 404) {
        return {
            status: 404,
            error: new Error('Stránka nebyla nalezena.')
        }
    }
    return {
        status: 500,
        error: new Error('Chyba při načítání dat. Zkuste to prosím znovu.')
    }
}