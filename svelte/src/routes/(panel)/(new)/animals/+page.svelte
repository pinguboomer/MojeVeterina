<script>
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";
    import {Heading} from "flowbite-svelte";

    export let data
</script>

<Heading class="mb-8">Pacienti</Heading>
<AnimalTable
        animals={data.animals}
        owners={data.owners.map((owner) => { return { name: `${owner.name} ${owner.surname}<br/><span class="text-xs text-gray-500">${owner.email}</span>`, value: owner._id } })}
/>