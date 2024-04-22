<script>
import TableMyInvoices from "$lib/components/table/TableMyInvoices.svelte";
import {Heading} from "flowbite-svelte";

export let data

</script>

<Heading class="mb-8">Moje platby</Heading>
<TableMyInvoices invoices={data.invoices}/>


