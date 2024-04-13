<script>

    import {Button, Heading, Helper, Input, Label, Textarea} from "flowbite-svelte";
    import {enhance} from "$app/forms";

    export let animal


    export let data = {
        animal: animal?._id,
        date: new Date().toISOString().split('T')[0],
        subject: "",
        weight: "",
        diagnose: "",
        recommendation: "",
        text: ""
    }
    export let form

    function getErrorText(reason) {
        switch(reason) {
            default:
                return 'Chyba při vytváření záznamu o vyšetření. Zkuste to prosím znovu.';
        }
    }
    console.log(data.date)
</script>

<form class="flex flex-col space-y-6" method="post" use:enhance>
    <Heading tag="h3" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Detail vyšetření</Heading>
    <Input class="hidden" type="text" name="animal" value={data.animal}></Input>
    <Label class="space-y-2">
        <span>Datum</span>
        <Input type="date" name="date" bind:value={data.date}></Input>
    </Label>
    <Label class="space-y-2">
        <span>Předmět</span>
        <Input type="text" name="subject" bind:value={data.subject} required/>
    </Label>
    <Label class="space-y-2">
        <span>Váha zvířete</span>
        <Input type="number" name="weight" min="0" bind:value={data.weight}/>
    </Label>
    <Label class="space-y-2">
        <span>Diagnóza</span>
        <Textarea name="diagnose" rows="5" bind:value={data.diagnose} required/>
    </Label>
    <Label class="space-y-2">
        <span>Doporučení</span>
        <Textarea name="recommendation" rows="5" type="text" bind:value={data.recommendation}/>
    </Label>
    <Label  class="space-y-2 mb-2" >
        <span>Poznámka</span>
        <Textarea name="text" rows="5" type="text" bind:value={data.text}/>
    </Label>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
    <Button class="w-full1" type="submit">Upravit vyšetření</Button>
</form>