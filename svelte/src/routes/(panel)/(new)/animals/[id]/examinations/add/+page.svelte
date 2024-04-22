<script>
    import {goto} from "$app/navigation";
    import FormNewExamination from "$lib/components/forms/FormNewExamination.svelte";
    import {A, Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";
    export let data
    export let form

    let examination

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Nové vyšetření</title>
</svelte:head>

<Heading class="mb-8">Nové vyšetření</Heading>
<A href="/animals/{data.animal._id}">Zpět na pacienta</A>
<FormNewExamination
        bind:data={examination}
        animal={data.animal}
        {form}
/>