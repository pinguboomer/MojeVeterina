<script>
    import {Button, Heading, Helper, Input, Label, P, Select} from "flowbite-svelte";
    import {enhance} from "$app/forms";

    export let owners = [];

    export let form;

    export let invoice = {
        client: '',
        items: []
    }

    let items = invoice.items;
    function getErrorText(reason) {
        switch(reason) {
            default:
                return 'Chyba při vytváření faktůry. Zkuste to prosím znovu.';
        }
    }


    let price;
    let name;
    let number;
    let suma = 0;



    function setSuma(){
        suma = 0;
        for (let item of items){
            suma = suma + (item.price * item.quantity);
        }

    }

    setSuma();
    function addItem() {
        let item = {name: name, price: price, quantity: number};
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

</script>

<form class="flex flex-col space-y-6" method="post" use:enhance>
    <Heading tag="h1" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Detail faktury</Heading>
    <!--{#if errorMessage !== undefined}-->
    <!--    <P class="text-red-700">{errorMessage}</P>-->
    <!--{/if}-->
    <Label class="space-y-2">
        <span>Plátce<span class="ml-1 text-red-500">*</span></span>
        <Select class="mt-2" placeholder="..." name="client" items={owners} bind:value={invoice.client} required />
    </Label>
    <div class="border border-gray-300 rounded-md p-4 mb-4">
        <Input class="hidden" name="number_items" bind:value={items.length}></Input>
        {#each items as item , i}
            <div class="flex items-center justify-between mt-1 border-b-gray-300">
                <Input class="hidden" name="item_name_{i}" bind:value={item.name}></Input>
                <Input class="hidden" name="item_price_{i}" bind:value={item.price}></Input>
                <Input class="hidden" name="item_quantity_{i}" bind:value={item.quantity}></Input>
                <P>{item.name}  {item.price} {item.quantity}</P>
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
        <Input bind:value={number} type="number" name="quantity" min="1"/>
        <Button on:click={addItem}>přidat položku</Button>
    </Label>
    <div class="flex items-center justify-between mt-1 border-b-gray-300">
        <P>Celková cena:</P>
        <P>{suma} Kč</P>
    </div>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
    <Button class="w-full" type="submit" disabled={!!form?.success}>Vytvořit novou faktůru</Button>
    <Button href="/addInvoices/{invoice._id}/pdfInvoice">PDF</Button>
</form>