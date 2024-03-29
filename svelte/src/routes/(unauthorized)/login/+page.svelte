<script>
    import {A, Button, Checkbox, Heading, Helper, Input, Label} from "flowbite-svelte";
    import {TITLE_PREFIX} from "$lib/constants.js";

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>{TITLE_PREFIX}Přihlášení</title>
</svelte:head>

<form method="POST">
    <Heading class="mb-6 text-center">Přihlášení</Heading>
    <div class="mb-4">
        <Label for="email" color={(form && !form.success)? 'red' : null} class="block mb-2">E-mail</Label>
        <Input id="email" name="email" color={(form && !form.success)? 'red' : null} placeholder="E-mail" type="email" required/>
    </div>
    <div class="mb-4">
        <Label for="password" color={(form && !form.success)? 'red' : null} class="block mb-2">Heslo</Label>
        <Input id="password" name="password" color={(form && !form.success)? 'red' : null} placeholder="Heslo" type="password" required />
    </div>
    <Checkbox class="mb-4" id="extend" name="extend">Zapamatujte si mě</Checkbox>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">Zadaný e-mail nebo heslo jsou nesprávné.</Helper>
    {/if}
    <Button class="block mx-auto mb-4 px-8" type="submit">Přihlásit se</Button>
    <Helper class="text-sm mt-2 text-center">Ještě nemáte účet? <A href="/register">Registrujte se</A></Helper>
</form>
