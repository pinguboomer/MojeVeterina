<script>
    import {Heading} from "flowbite-svelte";
    import FormDetailCustomer from "$lib/components/forms/FormDetailCustomer.svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data
    export let form
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Detail zaměstnance</title>
</svelte:head>

<Heading class="mb-8">Detail zaměstnance</Heading>
<FormDetailCustomer
    customer={data.staff}
    form={form}
    editButtonText="Upravit"
/>