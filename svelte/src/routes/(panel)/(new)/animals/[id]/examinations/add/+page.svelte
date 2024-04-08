<script>
    import {goto} from "$app/navigation";
    import FormNewExamination from "$lib/components/forms/FormNewExamination.svelte";
    import {P} from "flowbite-svelte";
    export let data
    export let form

    let examination

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

{#if data.animal}
    <FormNewExamination
            bind:data={examination}
            animal={data.animal}
            {form}
    />
{:else}
    <P>Žádné zvíře nebylo nalezeno.</P>
{/if}