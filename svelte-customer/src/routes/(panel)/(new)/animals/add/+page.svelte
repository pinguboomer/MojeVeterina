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
        user={data.user}
        {form}
        bind:animal={animal}
/>

