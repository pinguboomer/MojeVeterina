<script>

    import {Button, Helper, Input, Label, Textarea} from "flowbite-svelte";
    import {enhance} from "$app/forms";

    export let animal

    export let data = {
        date: "",
        subject: "",
        weight: "",
        diagnose: "",
        recommendation: "",
        text: ""
    }
    export let form

    let editMode = false

    function getErrorText(reason) {
        switch(reason) {
            default:
                return 'Chyba při ukládání záznamu o vyšetření. Zkuste to prosím znovu.';
        }
    }
</script>

<form class="flex flex-col space-y-6" method="post" use:enhance={() => {
		return async ({result}) => {
            form = result.data
            if (result.data.success) {
                editMode = false
            }
		};
	}}
>
    <Input type="text" name="animal" bind:value={animal._id} hidden class="hidden" disabled={!editMode}></Input>
    <Label class="space-y-2">
        <span>Datum</span>
        <Input type="date" name="date" bind:value={data.date} disabled={!editMode}></Input>
    </Label>
    <Label class="space-y-2">
        <span>Předmět</span>
        <Input type="text" name="subject" bind:value={data.subject} required disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Váha zvířete</span>
        <Input type="number" name="weight" min="0" step="0.01" bind:value={data.weight} disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Diagnóza</span>
        <Textarea name="diagnose" rows="5" bind:value={data.diagnose} required disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Doporučení</span>
        <Textarea name="recommendation" rows="5" type="text" bind:value={data.recommendation} disabled={!editMode}/>
    </Label>
    <Label  class="space-y-2 mb-2" >
        <span>Poznámka</span>
        <Textarea name="text" rows="5" type="text" bind:value={data.text} disabled={!editMode}/>
    </Label>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
    {#if editMode}
        <Button class="w-full" type="submit">Uložit změny</Button>
    {:else}
        <Button class="w-full" type="button" on:click={() => editMode = true}>Upravit vyšetření</Button>
    {/if}
</form>