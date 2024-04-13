<script>
    import {A, Button, Checkbox, Heading, Helper, Hr, Input, Label, Tooltip} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants";

    /** @type {import('./$types').ActionData} */
    export let form;

    function getErrorText(reason) {
        switch(reason) {
            case 'email_exists':
                return 'Uživatel s tímto e-mailem již existuje.';
            default:
                return 'Chyba při registraci. Zkuste to prosím znovu.';
        }
    }

</script>

<svelte:head>
    <title>{TITLE_PREFIX}Registrace</title>
</svelte:head>

<form method="POST">
    <Heading class="mb-6 text-center">Registrace</Heading>
    <div class="mb-4">
        <Label for="email" color={(form?.reason === 'email_exists')? "red" : null} class="block mb-2">E-mail <span class="text-red-500" data-tooltip='required'>*</span></Label>
        <Input id="email" name="email" placeholder="E-mail" type="email" required/>
    </div>
    <div class="mb-4">
        <Label for="password" class="block mb-2">Heslo <span class="text-red-500" data-tooltip='required'>*</span></Label>
        <Input id="password" name="password" placeholder="Heslo" type="password" required />
    </div>
    <div class="mb-4">
        <Label for="password2" class="block mb-2">Heslo znovu <span class="text-red-500" data-tooltip='required'>*</span></Label>
        <Input id="password2" name="password2" placeholder="Heslo znovu" type="password" required />
    </div>
    <Hr></Hr>
    <div class="grid">
        <div class="mb-4 grid-first-name">
            <Label for="firstName" class="block mb-2">Jméno</Label>
            <Input id="firstName" name="firstName" placeholder="Jméno" type="text" required />
        </div>
        <div class="mb-4 grid-last-name">
            <Label for="lastName" class="block mb-2">Přijmení</Label>
            <Input id="lastName" name="lastName" placeholder="Přijmení" type="text" required />
        </div>
        <div class="mb-4 grid-phone">
            <Label for="phone" class="block mb-2">Telefon</Label>
            <Input id="phone" name="phone" placeholder="Telefon" type="text" required />
        </div>
        <div class="mb-4 grid-address">
            <Label for="address" class="block mb-2">Ulice a číslo popisné</Label>
            <Input id="address" name="address" placeholder="Ulice a číslo popisné" type="text" required />
        </div>
        <div class="mb-4 grid-zip">
            <Label for="zipCode" class="block mb-2">PSČ</Label>
            <Input id="zipCode" name="zipCode" placeholder="PSČ" type="text" required />
        </div>
        <div class="mb-4 grid-city">
            <Label for="city" class="block mb-2">Město</Label>
            <Input id="city" name="city" placeholder="Město" type="text" required />
        </div>
    </div>
    <Checkbox class="mb-4" id="terms" name="terms" required>Souhlasím s podmínkami registrace</Checkbox>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
    <Button class="block mx-auto mb-4 px-8" type="submit">Registrovat se</Button>
    <Helper class="text-sm mt-2 text-center">Již máte účet? <A href="/login">Přihlašte se</A></Helper>
    <Tooltip type="auto" placement="right" triggeredBy="[data-tooltip='required']" tabindex="-1">Povinná položka</Tooltip>
</form>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "first-name last-name"
            "phone phone"
            "address address"
            "zip city";
        gap: 0 1rem;
    }

    .grid-first-name {
        grid-area: first-name;
    }

    .grid-last-name {
        grid-area: last-name;
    }

    .grid-address {
        grid-area: address;
    }

    .grid-zip {
        grid-area: zip;
    }

    .grid-city {
        grid-area: city;
    }

    .grid-phone {
        grid-area: phone;
    }
</style>
