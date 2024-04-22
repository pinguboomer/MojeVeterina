<script>
    import NewInvoices from "$lib/components/forms/FormNewInvoice.svelte";
    import {Heading} from "flowbite-svelte";
    import {page} from "$app/stores";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data
    export let form

    let owner = $page.url.searchParams.get('owner')

    let invoice = {
        client: owner,
        items: []
    }
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Přidat fakturu</title>
</svelte:head>

<Heading class="mb-8">Přidat fakturu</Heading>
<NewInvoices
        owners={data.customers.map((owner) => { return { name: `${owner.name} ${owner.surname} (${owner.email})`, value: owner._id } })}
        {form}
        bind:invoice={invoice}
/>