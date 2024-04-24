<script>

    import {Input, Label, Textarea} from "flowbite-svelte";

    export let animal

    export let data = {
        date: "",
        subject: "",
        weight: "",
        diagnose: "",
        recommendation: "",
        text: ""
    }
</script>

<div class="flex flex-col space-y-6">
    <Input type="text" name="animal" bind:value={animal._id} hidden class="hidden" disabled></Input>
    <Label class="space-y-2">
        <span>Datum</span>
        <Input type="date" name="date" bind:value={data.date} disabled></Input>
    </Label>
    <Label class="space-y-2">
        <span>Předmět</span>
        <Input type="text" name="subject" bind:value={data.subject} required disabled/>
    </Label>
    <Label class="space-y-2">
        <span>Váha zvířete</span>
        <Input type="number" name="weight" step="0.01" min="0" bind:value={data.weight} disabled/>
    </Label>
    <Label class="space-y-2">
        <span>Diagnóza</span>
        <Textarea name="diagnose" rows="5" bind:value={data.diagnose} required disabled/>
    </Label>
    <Label class="space-y-2">
        <span>Doporučení</span>
        <Textarea name="recommendation" rows="5" type="text" bind:value={data.recommendation} disabled/>
    </Label>
    <Label  class="space-y-2 mb-2" >
        <span>Poznámka</span>
        <Textarea name="text" rows="5" type="text" bind:value={data.text} disabled/>
    </Label>
</div>