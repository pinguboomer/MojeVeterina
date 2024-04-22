<script>
    import PDFInvoices from "$lib/components/PDFInvoices.svelte";
    import {Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data;
</script>

<svelte:head>
    <title>{TITLE_PREFIX}PDF detail faktury</title>
</svelte:head>

<Heading class="mb-8">Detail faktury</Heading>
<PDFInvoices
        invoice={data.invoice}
        client={data.client}
/>

