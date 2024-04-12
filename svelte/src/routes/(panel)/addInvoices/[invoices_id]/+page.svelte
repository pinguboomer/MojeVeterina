<script>
    import {goto} from "$app/navigation";
    import {Button, P} from "flowbite-svelte";
    import FormDetailInvoice from "$lib/components/forms/FormDetailInvoice.svelte";

    export let data
    export let form

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

{#await data.owners then owners}
    {#await data.invoice then invoice}
        <FormDetailInvoice
                owners={owners.map((owner) => { return { name: `${owner.name} ${owner.surname}`, value: owner._id } })}
                {form}
                invoice={invoice}
        />
    {:catch error}
        <P>{error.message}</P>
    {/await}
{:catch error}
    <P>{error.message}</P>
{/await}