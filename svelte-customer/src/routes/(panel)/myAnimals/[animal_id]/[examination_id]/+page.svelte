<script>
    import {Heading} from "flowbite-svelte";
    import FormDetailExamination from "$lib/components/forms/FormDetailExamination.svelte";

    export let data

    if (data.examination.date) {
        data.examination.date = data.examination.date.split('T')[0]
    }

    export let form
</script>

<Heading>Detail vyšetření</Heading>
<FormDetailExamination
        animal={data.animal}
        data={data.examination}
        {form}>
</FormDetailExamination>