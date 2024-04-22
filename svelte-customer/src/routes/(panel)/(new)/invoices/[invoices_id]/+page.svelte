<script>
    import PDFInvoices from "$lib/components/PDFInvoices.svelte";
    export let data;

</script>

<PDFInvoices
        invoice={data.invoice}
        client={data.user}
/>





