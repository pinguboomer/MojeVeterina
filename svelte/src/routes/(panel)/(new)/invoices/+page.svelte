<script>
    import InvoicesTable from "$lib/components/tables/InvoicesTable.svelte";
    import {Heading} from "flowbite-svelte";

    export let data
</script>

<Heading class="mb-8">Faktury</Heading>
<InvoicesTable invoices={data.invoices} clients={data.customers} />