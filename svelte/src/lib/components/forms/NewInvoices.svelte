<script>
    import {animal} from "../../../stores/reservationsStore.js";
    import {Button, Heading, Input, Label, P, Select, Textarea} from "flowbite-svelte";
    import {onMount} from "svelte";

    let selected;
    let price;
    let name;
    let number;
    let items = [];

    let suma = 0;


    const client = [{name: 'Václav Buřil'},
        {name: 'Tomáš Němeček'},
        {name: 'František Brýl'},
        {name: 'Filip Macháček'}];

    function setSuma(){
        for (let item of items){
            console.log(item)
            suma = suma + (item.price * item.number);
        }

    }

    function addItem() {
        let item = {name: name, price: price, number: number};
        items = items.concat(item);

        setSuma();

        price = undefined;
        name = undefined;
        number = undefined;
    }

    function deleteItem(i) {
        console.log(items)
        items.splice(i, 1);
        items = items;
    }

    //TODO
    function add() {

    }


</script>

<form class="" action="#">
    <Heading tag="h3" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Nová faktůra</Heading>
    <!--{#if errorMessage !== undefined}-->
    <!--    <P class="text-red-700">{errorMessage}</P>-->
    <!--{/if}-->
    <Label class="space-y-2">
        <span>Plátce</span>
        <Select class="mt-2" items={client} bind:value={selected}/>
    </Label>
    <div class="border border-gray-300 rounded-md p-4 mb-4">
        {#each items as item , i}
            <div class="flex items-center justify-between mt-1 border-b-gray-300">
                <P>{item.name}  {item.price} {item.number}</P>
                <Button on:click={() => deleteItem(i)}>Odtranit</Button>
            </div>
        {/each}
    </div>
    <Label class="space-y-2">
        <span>Položka</span>
        <Input bind:value={name} type="text" name="name"/>
        <span>Cena</span>
        <Input bind:value={price} type="number" name="price" min="0"/>
        <span>Počet</span>
        <Input bind:value={number} type="number" min="1" name="price"/>
        <Button on:click={addItem}>přidat položku</Button>
    </Label>
    <div class="flex items-center justify-between mt-1 border-b-gray-300">
        <P>Celková cena:</P>
        <P>{suma} Kč</P>
    </div>
    <Button class="w-full1" on:click={add}>Přidat nové zvíře</Button>
</form>