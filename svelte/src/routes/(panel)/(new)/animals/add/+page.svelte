<script>
    import FormNewAnimal from "$lib/components/forms/FormNewAnimal.svelte";
    import {goto} from "$app/navigation";
    import {Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";
    export let data
    export let form

    let animal

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Přidat pacienta</title>
</svelte:head>

<Heading tag="h1" class="mb-8">Přidat pacienta</Heading>
<FormNewAnimal
        owners={data.owners.map((owner) => { return { name: `${owner.name} ${owner.surname}`, value: owner._id } })}
        {form}
        bind:animal={animal}
/>

