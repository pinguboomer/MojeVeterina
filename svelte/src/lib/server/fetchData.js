export async function fetchData(url, token) {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    // throw new Error('Failed to load data from ' + url);
    if (!res.ok) {
        throw new Error('Failed to load data from ' + url);
    }
    else {
        return await res.json()
    }
}