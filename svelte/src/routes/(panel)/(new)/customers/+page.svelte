<script>
    import CustomersTable from "$lib/components/tables/CustomersTable.svelte";
    import {Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Klienti</title>
</svelte:head>

<Heading class="mb-8">Klienti</Heading>
<CustomersTable customers={data.customers} />