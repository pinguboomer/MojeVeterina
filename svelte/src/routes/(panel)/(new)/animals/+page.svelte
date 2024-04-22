<script>
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";
    import {Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Pacienti</title>
</svelte:head>

<Heading class="mb-8">Pacienti</Heading>
<AnimalTable
        animals={data.animals}
        owners={data.owners.map((owner) => { return { name: `${owner.name} ${owner.surname}<br/><span class="text-xs text-gray-500">${owner.email}</span>`, value: owner._id } })}
/>