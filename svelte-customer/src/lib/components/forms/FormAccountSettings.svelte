<script>
    import {Button, Helper, Input, Label} from "flowbite-svelte";
    import {enhance} from "$app/forms";

    export let form


    export let user = {
        name: '',
        surname: '',
        phone: '',
        address: '',
        city: '',
        zip_code: '',
        email: '',
        _id: '',
        role: ''
    }

    console.log(user)

    let editMode = false

    function getErrorText(reason) {
        switch(reason) {
            default:
                return 'Chyba při úpravě. Zkuste to prosím znovu.';
        }
    }
</script>

<form class="flex flex-col space-y-6 w-full" method="post" action="?/updateUser" use:enhance={() => {
		return async ({result}) => {
            form = result.data
            if (result.data.success) {
                editMode = false
            }
		};
	}}
>

    {#if editMode}
        <Button class="w-full" type="submit">Uložit změny</Button>
    {:else}
        <Button class="w-full" type="button" on:click={() => editMode = true}>Upravit nastavení účtu</Button>
    {/if}
    <Input type="hidden" hidden name="id" bind:value={user._id} />
    <Label class="space-y-2">
        <span>Jméno<span class="ml-1 text-red-500">*</span></span>
        <Input type="text" name="name" bind:value={user.name} required disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Příjmení<span class="ml-1 text-red-500">*</span></span>
        <Input type="text" name="surname" bind:value={user.surname} required disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>E-mail<span class="ml-1 text-xs text-red-500">(nelze měnit)</span></span>
        <Input type="email" name="email" bind:value={user.email} required on:keydown={(e) => e.preventDefault()} disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Telefonní číslo</span>
        <Input type="tel" name="phone" bind:value={user.phone} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Ulice a číslo popisné</span>
        <Input type="text" name="address" bind:value={user.address} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Město</span>
        <Input type="text" name="city" bind:value={user.city} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>PSČ</span>
        <Input type="text" name="zip" bind:value={user.zip_code} disabled={!editMode} />
    </Label>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
</form>
