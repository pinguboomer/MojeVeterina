<script>
    import {Button, Helper, Input, Label, Select} from "flowbite-svelte";
    import {enhance} from "$app/forms";
    export let owners = [];
    export let form

    export let animal = {
        name: '',
        species: '',
        sex: '',
        birthDate: '',
        deathDate: '',
        owner: ''
    }

    function getErrorText(reason) {
        switch(reason) {
            default:
                return 'Chyba při vytváření zvířete. Zkuste to prosím znovu.';
        }
    }
</script>

<form class="flex flex-col space-y-6" method="post" use:enhance>
    <Label class="space-y-2">
        <span>Jméno</span>
        <Input type="text" name="name" bind:value={animal.name} />
    </Label>
    <Label class="space-y-2">
        <span>Druh<span class="ml-1 text-red-500">*</span></span>
        <Input type="text" name="species" bind:value={animal.species} required />
    </Label>
    <Label class="space-y-2">
        <span>Pohlaví</span>
        <Input type="text" name="sex" bind:value={animal.sex} />
    </Label>
    <Label class="space-y-2">
        <span>Datum narození</span>
        <Input type="date" name="birthDate" bind:value={animal.birthDate} />
    </Label>
    <Label class="space-y-2">
        <span>Datum úmrtí</span>
        <Input type="date" name="deathDate" bind:value={animal.deathDate} />
    </Label>
    <Label class="space-y-2">
        <span>Majitel<span class="ml-1 text-red-500">*</span></span>
        <Select class="mt-2" placeholder="..." name="owner" items={owners} bind:value={animal.owner} required />
    </Label>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
    <Button class="w-full" type="submit" disabled={!!form?.success}>Přidat nové zvíře</Button>
</form>