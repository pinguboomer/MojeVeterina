<script>
    import FormDetailAnimal from "$lib/components/forms/FormDetailAnimal.svelte";
    import ExaminationsTable from "$lib/components/tables/ExaminationsTable.svelte";
    import {A, Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";
    export let data
    export let form

    if (data?.animal?.birthDate) data.animal.birthDate = data.animal.birthDate.split('T')[0]
    if (data?.animal?.deathDate) data.animal.deathDate = data.animal.deathDate.split('T')[0]
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Detail pacienta</title>
</svelte:head>

<Heading tag="h1" class="mb-8">Detail pacienta</Heading>
<A href="/customers/{data?.animal?.owner}" class="mb-6">Na majitele</A>
<div class="space-y-8 xl:flex xl:gap-8">
    {#if data.owners}
        <FormDetailAnimal
                owners={data.owners.map((owner) => { return { name: `${owner.name} ${owner.surname} (${owner.email})`, value: owner._id } })}
                {form}
                bind:animal={data.animal}
        />
    {/if}
    <hr/>
    <div class="-mt-2 xl:mt-0 w-full">
        <Heading tag="h2" customSize="text-2xl font-bold" class="mb-4">Vyšetření</Heading>
        <ExaminationsTable
                examinations={data.examinations}
                animalId={data.animal._id}
        />
    </div>
</div>
