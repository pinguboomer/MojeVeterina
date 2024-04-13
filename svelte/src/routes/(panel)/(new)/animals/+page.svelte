<script>
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";

    export let data
</script>

<AnimalTable animals={data.animals} />