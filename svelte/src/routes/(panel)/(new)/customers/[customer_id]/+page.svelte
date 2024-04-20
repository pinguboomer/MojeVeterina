<script>
    import {Heading} from "flowbite-svelte";
    import FormDetailCustomer from "$lib/components/forms/FormDetailCustomer.svelte";
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";

    export let data
    export let form
</script>

<Heading class="mb-4">Detail klienta</Heading>
<div class="space-y-8">
    <FormDetailCustomer
            customer={data.customer}
            form={form}
    />
    <hr/>
    <div class="-mt-2">
        <Heading tag="h2" customSize="text-2xl font-bold" class="mb-4">Zvířata</Heading>
        <AnimalTable
                animals={data.animals}
                showOwners={false}
        />
    </div>
</div>

