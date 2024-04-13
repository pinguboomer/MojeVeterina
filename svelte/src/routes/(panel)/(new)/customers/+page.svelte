<script>
    import CustomersTable from "$lib/components/tables/CustomersTable.svelte";
    import {Heading} from "flowbite-svelte";

    export let data
</script>


<Heading class="mb-8">Klienti</Heading>
<CustomersTable customers={data.customers} />