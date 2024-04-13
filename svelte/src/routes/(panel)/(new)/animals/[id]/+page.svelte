<script>
    import FormDetailAnimal from "$lib/components/forms/FormDetailAnimal.svelte";
    export let data
    export let form

    $: console.log('data', data)
    $: console.log('form', form)

    if (data?.animal?.birthDate) data.animal.birthDate = data.animal.birthDate.split('T')[0]
    if (data?.animal?.deathDate) data.animal.deathDate = data.animal.deathDate.split('T')[0]
</script>

<FormDetailAnimal
        owners={data.owners.map((owner) => { return { name: `${owner.name} ${owner.surname}`, value: owner._id } })}
        {form}
        bind:animal={data.animal}
/>