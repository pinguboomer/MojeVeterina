<script>
    import FormDetailExamination from "$lib/components/forms/FormDetailExamination.svelte";
    import {Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/env";

    export let data

    if (data.examination.date) {
        data.examination.date = data.examination.date.split('T')[0]
    }

    export let form
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Detail vyšetření</title>
</svelte:head>

<Heading class="mb-8">Detail vyšetření</Heading>
<FormDetailExamination
        animal={data.animal}
        data={data.examination}
        {form}>
</FormDetailExamination>