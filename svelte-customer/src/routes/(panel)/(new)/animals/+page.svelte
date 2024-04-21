<script>
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";
    import {Button, Heading} from "flowbite-svelte";

    export let data

    console.log(data)
</script>

<Heading class="mb-8">Moji mazlíčci</Heading>
<Button href="/animals/add" class="mb-8">Přidat zvíře</Button>
<AnimalTable
        animals={data.animals}
/>