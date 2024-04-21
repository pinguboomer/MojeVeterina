<script>
    import FormDetailAnimal from "$lib/components/forms/FormDetailAnimal.svelte";
    import ExaminationsTable from "$lib/components/tables/ExaminationsTable.svelte";
    import {Heading} from "flowbite-svelte";
    export let data
    export let form

    if (data?.animal?.birthDate) data.animal.birthDate = data.animal.birthDate.split('T')[0]
    if (data?.animal?.deathDate) data.animal.deathDate = data.animal.deathDate.split('T')[0]

    console.log(data)
</script>

<Heading tag="h1" class="mb-8">Detail zvířete</Heading>
<div class="space-y-8 xl:flex xl:gap-8">
    <FormDetailAnimal
            user={data.user}
            {form}
            bind:animal={data.animal}
    />
    <hr/>
    <div class="-mt-2 xl:mt-0 w-full">
        <Heading tag="h2" customSize="text-2xl font-bold" class="mb-4">Vyšetření</Heading>
        <ExaminationsTable
                examinations={data.examinations}
                animalId={data.animal._id}
        />
    </div>
</div>
