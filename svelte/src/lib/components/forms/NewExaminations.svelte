<script>

    import {Button, Heading, Input, Label, Modal, P, Textarea} from "flowbite-svelte";
    import {animal} from "../../../stores/reservationsStore.js";

    let weight;

    let errorMessage;

    async function add(){
        if (weight < 0){
            errorMessage = "Váha nesmí být záporná";
            return;
        }
    }

</script>

<form class="" action="#">
    <Heading tag="h3" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Nové vytvoření</Heading>
    {#if errorMessage !== undefined}
    <P class="text-red-700">{errorMessage}</P>
        {/if}
    <Label class="space-y-2">
        <span>Druh</span>
        <Input type="text" name="species" value={$animal} required/>
    </Label>
    <Label class="space-y-2">
        <span>Váha</span>
        <Input type="number" name="weight" min="0" bind:value={weight}/>
    </Label>
    <Label class="space-y-2">
        <span>Diagnóza</span>
        <Textarea name="diagnose" rows="5" required/>
    </Label>
    <Label class="space-y-2">
        <span>Doporučení</span>
        <Textarea rows="5" type="text" name="recommendation"/>
    </Label>
    <Label  class="space-y-2 mb-2" >
        <span>Poznámka</span>
        <Textarea rows="5" type="text" name="text"/>
    </Label>
    <Button class="w-full1" on:click={add}>Přidat nové zvíře</Button>
</form>



