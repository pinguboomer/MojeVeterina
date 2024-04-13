<script>
    import FormDetailExamination from "$lib/components/forms/FormDetailExamination.svelte";
    import { page } from "$app/stores";

    export let data
    export let form
</script>

<FormDetailExamination
        animal={data.animal}
        data={data.examination}
        {form}>
</FormDetailExamination>