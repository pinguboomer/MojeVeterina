<script>
    import {Button, P} from "flowbite-svelte";
    import PDFInvoices from "$lib/components/PDFInvoices.svelte";
    import {invoicesNumber} from "../../../stores/invoiceStore.js";
</script>
{#if $invoicesNumber !== null}
    <PDFInvoices/>

{:else}
    <P>Není vybraná žádná faktura</P>
    <Button href="/myInvoices">Zpět na výpis</Button>
    {/if}



