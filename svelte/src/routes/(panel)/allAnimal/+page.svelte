<script>
    import {PUBLIC_API_URL} from "$env/static/public";
    import {onMount} from "svelte";
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";

    let animals = [];

    onMount(async () => {
        animals = await load()
    })

    //TODO dodělat tokeny
    async function load() {
        const res = await fetch(PUBLIC_API_URL + '/v1/animals', {
            method: 'GET'
        })

        if (res.ok) {
            return await res.json() || []
        }

        return [];
    }


</script>
<AnimalTable animals={animals}></AnimalTable>
