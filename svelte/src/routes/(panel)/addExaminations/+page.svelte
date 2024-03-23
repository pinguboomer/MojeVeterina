<script>

    import {Button, Heading, Input, Label,Textarea} from "flowbite-svelte";
    import {animal} from "../../../stores/reservationsStore.js";
</script>

    <form class="" action="#">
        <Heading tag="h3" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Přidání nového zvířete</Heading>
        <Label class="space-y-2">
            <span>Druh</span>
            <Input type="text" name="species" value={$animal} required />
        </Label>
        <Label class="space-y-2">
            <span>Váha</span>
            <Input type="number" name="weight" min="0" />
        </Label>
        <Label class="space-y-2">
            <span>Diagnóza</span>
            <Textarea name="diagnose" rows="5" required />
        </Label>
        <Label class="space-y-2">
            <span>Doporučení</span>
            <Textarea rows="5" type="text" name="recommendation"/>
        </Label>
        <Label class="space-y-2">
            <span>Poznámka</span>
            <Textarea rows="5" type="text" name="text"/>
        </Label>
        <Button  class="w-full1">Přidat nové zvíře</Button>
    </form>
