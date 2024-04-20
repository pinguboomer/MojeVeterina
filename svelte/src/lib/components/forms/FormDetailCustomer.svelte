<script>
    import {Button, Helper, Input, Label, Select} from "flowbite-svelte";
    import {enhance} from "$app/forms";

    export let editButtonText = 'Upravit klienta'

    export let form


    export let customer = {
        name: '',
        surname: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        email: '',
        _id: '',
        role: ''
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
            <Button class="w-full" type="button" on:click={() => editMode = true}>{editButtonText}</Button>
        {/if}
    </div>
    <Input type="hidden" hidden name="id" bind:value={customer._id} />
    <Label class="space-y-2">
        <span>Jméno<span class="ml-1 text-red-500">*</span></span>
        <Input type="text" name="name" bind:value={customer.name} required disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Příjmení<span class="ml-1 text-red-500">*</span></span>
        <Input type="text" name="surname" bind:value={customer.surname} required disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>E-mail<span class="ml-1 text-xs text-red-500">(nelze měnit)</span></span>
        <Input type="email" name="email" bind:value={customer.email} required on:keydown={(e) => e.preventDefault()} disabled={!editMode}/>
    </Label>
    <Label class="space-y-2">
        <span>Telefonní číslo</span>
        <Input type="tel" name="phone" bind:value={customer.phone} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Ulice a číslo popisné</span>
        <Input type="text" name="address" bind:value={customer.address} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Město</span>
        <Input type="text" name="city" bind:value={customer.city} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>PSČ</span>
        <Input type="text" name="zip" bind:value={customer.zip} disabled={!editMode} />
    </Label>
    <Label class="space-y-2">
        <span>Role</span>
        <Select required bind:value={customer.role} items={[{value: 'CUSTOMER', name: 'Klient'}, {value: 'ADMIN', name: 'Zaměstnanec'}]} placeholder="..." name="role" disabled={!editMode} />
    </Label>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
</form>
