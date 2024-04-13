<script>
import TableMyInvoices from "$lib/components/table/TableMyInvoices.svelte";

export let data

</script>

<TableMyInvoices invoices={data.invoices}/>


