<script>
    import NewInvoices from "$lib/components/forms/FormNewInvoice.svelte";
    import {goto} from "$app/navigation";
    import {P} from "flowbite-svelte";

    export let data
    export let form

    let invoice

    $: if (form?.redirect){
        goto(form.redirect)
    }
</script>

{#await data.owners then owners}
<NewInvoices
        owners={owners.map((owner) => { return { name: `${owner.name} ${owner.surname}`, value: owner._id } })}
        {form}
        bind:invoice={invoice}
/>
    {:catch error}
    <P>{error.message}</P>
    {/await}