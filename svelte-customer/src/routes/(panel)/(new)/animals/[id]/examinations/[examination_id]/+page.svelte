<script>
    import FormDetailExamination from "$lib/components/forms/FormDetailExamination.svelte";
    import {A, Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

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
<A href="/animals/{data.animal._id}" class="mb-6">Zpět na mazlíčka</A>
<FormDetailExamination
        animal={data.animal}
        data={data.examination}
        {form}>
</FormDetailExamination>