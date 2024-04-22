<script>
    import AnimalTable from "$lib/components/tables/AnimalTable.svelte";
    import {Button, Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants";

    export let data
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Moji mazlíčci</title>
</svelte:head>

<Heading class="mb-8">Moji mazlíčci</Heading>
<Button href="/animals/add" class="mb-8">Přidat zvíře</Button>
<AnimalTable
        animals={data.animals}
/>