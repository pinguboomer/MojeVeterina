<script>
    import {Heading} from "flowbite-svelte";
    import FormAccountSettings from "$lib/components/forms/FormAccountSettings.svelte";

    export let data
</script>

<Heading class="mb-8">Nastavení účtu</Heading>
<FormAccountSettings user={data.user} />