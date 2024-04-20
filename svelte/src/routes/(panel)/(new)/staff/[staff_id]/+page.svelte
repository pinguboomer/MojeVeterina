<script>
    import {Heading} from "flowbite-svelte";
    import FormDetailCustomer from "$lib/components/forms/FormDetailCustomer.svelte";

    export let data
    export let form
</script>

<Heading class="mb-4">Detail zaměstnance</Heading>
<FormDetailCustomer
    customer={data.staff}
    form={form}
    editButtonText="Upravit"
/>