<script>
    import FormDetailInvoice from "$lib/components/forms/FormDetailInvoice.svelte";
    import {A, Heading} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    export let data
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Detail faktury</title>
</svelte:head>

<Heading class="mb-8">Detail faktury</Heading>
<A href="/invoices" class="mb-6">Zpět na faktury</A>
<FormDetailInvoice
        client={data.client}
        invoice={data.invoice}
/>