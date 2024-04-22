<script>
    import FormNewAnimal from "$lib/components/forms/FormNewAnimal.svelte";
    import {goto} from "$app/navigation";
    import {Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/env";
    export let data
    export let form

    let animal

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Přidat mazlíčka</title>
</svelte:head>

<Heading tag="h1" class="mb-8">Přidat mazlíčka</Heading>
<FormNewAnimal
        user={data.user}
        {form}
        bind:animal={animal}
/>

