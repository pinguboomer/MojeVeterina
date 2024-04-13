<script>
    import FormNewAnimal from "$lib/components/forms/FormNewAnimal.svelte";
    import {goto} from "$app/navigation";
    export let data
    export let form

    let animal

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

<FormNewAnimal
        owners={data.owners.map((owner) => { return { name: `${owner.name} ${owner.surname}`, value: owner._id } })}
        {form}
        bind:animal={animal}
/>

