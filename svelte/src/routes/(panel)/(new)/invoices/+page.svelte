<script>
    import InvoicesTable from "$lib/components/tables/InvoicesTable.svelte";
    import {Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Faktury</title>
</svelte:head>

<Heading class="mb-8">Faktury</Heading>
<InvoicesTable invoices={data.invoices} clients={data.customers} />