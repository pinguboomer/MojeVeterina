<script>
    import PDFInvoices from "$lib/components/PDFInvoices.svelte";
    import {Heading} from "flowbite-svelte";

    export let data;
</script>

<Heading class="mb-8">Detail faktury</Heading>
<PDFInvoices
        invoice={data.invoice}
        client={data.client}
/>

