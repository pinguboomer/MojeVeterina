<script>
    import {Heading} from "flowbite-svelte";
    import FormDetailCustomer from "$lib/components/forms/FormDetailCustomer.svelte";
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data
    export let form
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Detail klienta</title>
</svelte:head>

<Heading class="mb-8">Detail klienta</Heading>
<div class="space-y-8">
    <FormDetailCustomer
            customer={data.customer}
            form={form}
            showCreateInvoice={true}
    />
    <hr/>
    <div class="-mt-2">
        <Heading tag="h2" customSize="text-2xl font-bold" class="mb-4">Mazlíčci</Heading>
        <AnimalTable
                animals={data.animals}
                showOwners={false}
        />
    </div>
</div>

