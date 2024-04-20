<script>
    import NewInvoices from "$lib/components/forms/FormNewInvoice.svelte";
    import {Heading} from "flowbite-svelte";

    export let data
    export let form

    let invoice
</script>

<Heading class="mb-8">Přidat fakturu</Heading>
<NewInvoices
        owners={data.customers.map((owner) => { return { name: `${owner.name} ${owner.surname} (${owner.email})`, value: owner._id } })}
        {form}
        bind:invoice={invoice}
/>