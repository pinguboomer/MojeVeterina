<script>
    import {Button, Heading, Helper, Input, Label, Modal, Select, Span} from "flowbite-svelte";
    let formModal = false;
    import {enhance} from "$app/forms";
    import {formatDateWithHours} from "$lib/formateDate.js";

    export let animals;

    export let date;

     let reservations = {
         animal: '',
         reason:''
     };

    export let form;

    function getErrorText(reason) {
        switch(reason) {
            default:
                return 'Chyba při vytváření zvířete. Zkuste to prosím znovu.';
        }
    }
</script>

<Button on:click={() => (formModal = true)}>Přidat</Button>


<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" method="post" use:enhance>
        <Heading tag="h2" class="mb-4">Provedení rezervace</Heading>
        <Span class="mb-4">{formatDateWithHours(new Date(date))}</Span>
        <input type="text" name="date" bind:value={date} class="hidden"/>
        <Label class="space-y-2">
            <span>Předmět návštevy</span>
            <Input type="text" name="reason" bind:value={reservations.reason} />
        </Label>
        <Label class="space-y-2">
            <span>Zvíře<span class="ml-1 text-red-500">*</span></span>
            <Select class="mt-2" placeholder="..." name="animal" items={animals} bind:value={reservations.animal} required />
        </Label>
        {#if form && !form?.success}
            <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
        {/if}
        <Button class="w-full" type="submit">Provést rezervaci</Button>
    </form>
</Modal>