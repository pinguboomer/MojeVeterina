<script>
    import FormDetailInvoice from "$lib/components/forms/FormDetailInvoice.svelte";
    import {Heading} from "flowbite-svelte";

    export let data
</script>

<Heading class="mb-8">Detail faktury</Heading>
<FormDetailInvoice
        client={data.client}
        invoice={data.invoice}
/>