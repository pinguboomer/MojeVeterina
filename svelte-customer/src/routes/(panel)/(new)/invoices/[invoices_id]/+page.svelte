<script>
    import PDFInvoices from "$lib/components/PDFInvoices.svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";
    import {A, Heading} from "flowbite-svelte";
    export let data;

</script>

<svelte:head>
    <title>{TITLE_PREFIX}Detail platby</title>
</svelte:head>

<Heading class="mb-8">Detail platby</Heading>
<A href="/invoices" class="mb-6">Zpět na moje platby</A>
<PDFInvoices
        invoice={data.invoice}
        client={data.user}
/>





