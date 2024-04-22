<script>
import TableMyInvoices from "$lib/components/table/TableMyInvoices.svelte";
import {Heading} from "flowbite-svelte";
import {TITLE_PREFIX} from "$lib/constants.js";

export let data

</script>

<svelte:head>
    <title>{TITLE_PREFIX}Moje platby</title>
</svelte:head>

<Heading class="mb-8">Moje platby</Heading>
<TableMyInvoices invoices={data.invoices}/>


