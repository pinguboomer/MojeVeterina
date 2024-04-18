<script>
    import {Button, Helper, Input, Label, Select} from "flowbite-svelte";
    import {enhance} from "$app/forms";
    export let owners = [];
    export let form

    export let animal = {
        _id: '',
        name: '',
        species: '',
        sex: '',
        birthDate: '',
        deathDate: '',
        owner: ''
    }

    let editMode = false

    function getErrorText(reason) {
        switch(reason) {
            default:
                return 'Chyba při úpravě. Zkuste to prosím znovu.';
        }
    }
</script>

<form class="flex flex-col space-y-6 w-full" method="post" use:enhance={() => {
		return async ({result}) => {
            form = result.data
            if (result.data.success) {
                editMode = false
            }
		};
	}}
>
    <div class="flex gap-4">
        {#if editMode}
            <Button class="w-full" type="submit">Uložit změny</Button>
        {:else}
            <Button class="w-full" type="button" on:click={() => editMode = true}>Upravit zvíře</Button>
        {/if}
        <Button href="/animals/{animal._id}/examinations/add" class="w-full" variant="secondary">Vyšetření</Button>
    </div>
    <Label class="space-y-2">
        <span>Jméno</span>
        <Input type="text" name="name" bind:value={animal.name} disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Druh<span class="ml-1 text-red-500">*</span></span>
        <Input type="text" name="species" bind:value={animal.species} required disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Pohlaví</span>
        <Input type="text" name="sex" bind:value={animal.sex} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Datum narození</span>
        <Input type="date" name="birthDate" bind:value={animal.birthDate} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Datum úmrtí</span>
        <Input type="date" name="deathDate" bind:value={animal.deathDate} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Majitel<span class="ml-1 text-red-500">*</span></span>
        <Select class="mt-2" placeholder="..." name="owner" items={owners} bind:value={animal.owner} required disabled={!editMode} />
    </Label>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
</form>
