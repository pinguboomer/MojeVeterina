<script>
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";

    export let data
</script>

<AnimalTable
        animals={data.animals}
        owners={data.owners.map((owner) => { return { name: `${owner.name} ${owner.surname}`, value: owner._id } })}
/>