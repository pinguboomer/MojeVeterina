<script>
    import {goto} from "$app/navigation";
    import FormDetailAnimal from "$lib/components/forms/FormDetailAnimal.svelte";
    export let data
    export let form

    $: if (form?.redirect) {
        goto(form.redirect)
    }
</script>

{#await data.owners then owners}
    <FormDetailAnimal
            owners={owners.map((owner) => { return { name: `${owner.name} ${owner.surname}`, value: owner._id } })}
            {form}
            bind:animal={data.animal}
    />
{:catch error}
    <p>{error.message}</p>
{/await}