<script>
    import {Button, P} from "flowbite-svelte";
    import PDFInvoices from "$lib/components/PDFInvoices.svelte";
    import {goto} from "$app/navigation";

    export let data;

    export let form

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

{#await data.invoice then invoice}
    {#await data.client then client}
        <PDFInvoices
                invoice={invoice}
                client={client}
        />
<!--        <Button on:click={() => console.log(client)}/>-->
    {:catch error}
        <P>{error.message}</P>
    {/await}
{:catch error}
    <P>{error.message}</P>
{/await}



