<script>

    import {Button, Heading, Input, Label, Modal} from "flowbite-svelte";

    let formModal = false;
</script>

<!--<Button on:click={() => (formModal = true)}>Form modal</Button>-->

<!--<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">-->
    <form class="flex flex-col space-y-6" action="#">
        <Heading tag="h3" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Nové vyšetření</Heading>
        <Label class="space-y-2">
            <span>Druh</span>
            <Input type="text" name="species" required />
        </Label>
        <Label class="space-y-2">
            <span>Pohlaví</span>
            <Input type="text" name="sex" required />
        </Label>
        <Label class="space-y-2">
            <span>Datum narození</span>
            <Input type="date" name="birthdate" required />
        </Label>
        <Label class="space-y-2">
            <span>Majitel</span>
            <Input type="select" name="sex" required />
        </Label>
        <Button  class="w-full1" >Přidat nové zvíře</Button>
    </form>
<!--</Modal>-->


