<script>
    import InvoicesTable from "$lib/components/tables/InvoicesTable.svelte";
    import {P} from "flowbite-svelte";
    export let data;

    console.log(data.clients)

</script>

{#await data.invoices then invoices}
    <InvoicesTable invoices={invoices}
    clients={data.clients}
    />
{:catch error}
    <P>{error.message}</P>
{/await}