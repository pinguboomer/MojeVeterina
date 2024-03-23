<script>
    import {Button, Input, Label} from "flowbite-svelte";
</script>

<!--<div id="login-site">-->
<div id="login-form-wrap">
    <form method="POST" action="?/login">
        <h1>Přihlášení</h1>
        <div class="mb-6">
            <Label for="email" class="block mb-2">Email</Label>
            <Input id="email" name="email" placeholder="Email" />
        </div>
        <div class="mb-6">
            <Label for="password" class="block mb-2">Email</Label>
            <Input id="password" name="password" placeholder="Heslo" />
        </div>
        <Button type="submit">Přihlásit</Button>
    </form>
</div>
<!--</div>-->
