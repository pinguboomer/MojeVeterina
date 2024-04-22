<script>
    import {Heading} from "flowbite-svelte";
    import FormAccountSettings from "$lib/components/forms/FormAccountSettings.svelte";
    import {TITLE_PREFIX} from "$lib/constants";

    export let data
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Nastavení účtu</title>
</svelte:head>

<Heading class="mb-8">Nastavení účtu</Heading>
<FormAccountSettings user={data.user} />