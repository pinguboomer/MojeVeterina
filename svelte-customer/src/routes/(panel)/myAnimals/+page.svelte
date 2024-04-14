<script>
    import TableMyAnimals from "$lib/components/table/TableMyAnimals.svelte";

    export let data;
</script>

<TableMyAnimals
    animals={data.animals}
/>