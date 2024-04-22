<script>
    import {Button, Heading, Helper, Input, Label} from "flowbite-svelte";
    import {enhance} from "$app/forms";
    export let user = {_id: ""};
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
    <Input type="hidden" class="hidden" name="owner" value={user._id} />
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
    <Button class="w-full" type="submit" disabled={!!form?.success}>Přidat nové zvíře</Button>
</form>