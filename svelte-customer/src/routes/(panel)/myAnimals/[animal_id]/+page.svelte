<script>
    import {Heading} from "flowbite-svelte";
    import FormDetailAnimal from "$lib/components/forms/FormDetailAnimal.svelte";
    import ExaminationsTable from "$lib/components/table/ExaminationsTable.svelte";
    export let data
    export let form

    if (data?.animal?.birthDate) data.animal.birthDate = data.animal.birthDate.split('T')[0]
    if (data?.animal?.deathDate) data.animal.deathDate = data.animal.deathDate.split('T')[0]
</script>

<Heading tag="h1" class="mb-4">Detail zvířete</Heading>
<div class="md:flex gap-8">
    <FormDetailAnimal
            {form}
            bind:animal={data.animal}
    />
    <ExaminationsTable
            examinations={data.examinations}
            animalId={data.animal._id}
    />
</div>
