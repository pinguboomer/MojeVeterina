<script>
    import InvoicesTable from "$lib/components/tables/InvoicesTable.svelte";
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";

    let invoices = [];

    onMount(async () => {
        invoices = await load();
    })

    //TODO dodělat
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

<InvoicesTable invoices={invoices}/>