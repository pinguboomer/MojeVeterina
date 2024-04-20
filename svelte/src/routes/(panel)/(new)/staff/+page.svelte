<script>
    import CustomersTable from "$lib/components/tables/CustomersTable.svelte";
    import {Heading} from "flowbite-svelte";

    export let data
</script>


<Heading class="mb-8">Zaměstnanci</Heading>
<CustomersTable customers={data.staff} detailHref={'/staff/'} />