<script>
    import {P} from "flowbite-svelte";
    import PDFInvoices from "$lib/components/PDFInvoices.svelte";
    export let data;

</script>
{#if data.invoice}
<PDFInvoices
        invoice={data.invoice}
        client={data.user}
/>
    {:else }
    <P>Žádná faktura nebyla nalezena.</P>
    {/if}





