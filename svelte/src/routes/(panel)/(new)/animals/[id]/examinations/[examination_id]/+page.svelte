<script>
    import {goto} from "$app/navigation";
    import {P} from "flowbite-svelte";
    import FormDetailExamination from "$lib/components/forms/FormDetailExamination.svelte";

    export let data
    export let form

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

{#if data.animal}
    <FormDetailExamination
            animal={data.animal}
            data={data.examination}
            {form}></FormDetailExamination>
{:else}
    <P>Žádné vyšetření nebylo nalezeno.</P>
{/if}