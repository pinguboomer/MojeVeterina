<script>
    import {
        A,
        Button,
        Heading,
        Helper,
        Input,
        Label,
        Select,
        Span,
        Table, TableBody, TableBodyCell, TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
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
                return 'Chyba při vytváření faktury. Zkuste to prosím znovu.';
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

    function addItem() {
        if (!price || !name || !number || price <= 0 || name?.length === 0 || number <= 0) {
            return;
        }

        let item = {name: name, price: price, quantity: number};
        items = items.concat(item);

        setSuma();

        price = undefined;
        name = undefined;
        number = undefined;
    }

    function deleteItem(i) {
        items.splice(i, 1);
        items = items;
        setSuma();
    }

</script>

<form class="flex flex-col space-y-6" method="post" use:enhance>
    <Label class="space-y-2">
        <span>Plátce<span class="ml-1 text-red-500">*</span></span>
        <Select class="mt-2" placeholder="..." name="client" items={owners} bind:value={invoice.client} required />
    </Label>
    <div class="border border-gray-300 rounded-md p-4 mb-4">
        <Input class="hidden" type="number" name="number_items" bind:value={items.length}></Input>
        <Table>
            <TableHead>
                <TableHeadCell>Položka</TableHeadCell>
                <TableHeadCell>Cena za jednotku</TableHeadCell>
                <TableHeadCell>Počet</TableHeadCell>
                <TableHeadCell>Cena položky</TableHeadCell>
                <TableHeadCell></TableHeadCell>
            </TableHead>
            <TableBody>
                {#each items as item , i}
                    <TableBodyRow>
                        <TableBodyCell>
                            <Input class="hidden" name="item_name_{i}" bind:value={item.name}></Input>
                            {item.name}
                        </TableBodyCell>
                        <TableBodyCell>
                            <Input class="hidden" name="item_price_{i}" bind:value={item.price}></Input>
                            {item.price} Kč
                        </TableBodyCell>
                        <TableBodyCell>
                            <Input class="hidden" name="item_quantity_{i}" bind:value={item.quantity}></Input>
                            {item.quantity}
                        </TableBodyCell>
                        <TableBodyCell>
                            {item.price * item.quantity} Kč
                        </TableBodyCell>
                        <TableBodyCell>
                            <A on:click={() => deleteItem(i)}>Odtranit</A>
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
                {#if items.length === 0}
                    <TableBodyRow>
                        <TableBodyCell class="text-center" colspan="5">Žádné položky</TableBodyCell>
                    </TableBodyRow>
                {/if}
            </TableBody>
        </Table>
    </div>
    <div class="border border-gray-300 rounded-md p-4 mb-4 space-y-2">
        <Heading tag="h2" class="text-2xl mb-4">Přidat položku</Heading>
        <Label class="space-y-2">
            <span>Položka</span>
            <Input bind:value={name} type="text" name="invoice-title"/>
        </Label>
        <Label class="space-y-2">
            <span>Cena za jednotku</span>
            <Input bind:value={price} type="number" name="price" min="0"/>
        </Label>
        <Label class="space-y-2 ">
            <span>Počet</span>
            <Input bind:value={number} type="number" name="quantity" min="1"/>
        </Label>
        <div class="flex justify-between my-2">
            <Span>
                Cena položky:
            </Span>
            <Span>
                {price * number || 0} Kč
            </Span>
        </div>
        <Button on:click={addItem}>Přidat položku</Button>
    </div>
    <div class="flex items-center justify-between mt-1 border-b-gray-300">
        <Span>Celková cena:</Span>
        <Span>{suma} Kč</Span>
    </div>
    {#if form && !form?.success}
        <Helper class="text-sm text-center mb-4" color="red">{getErrorText(form?.reason)}</Helper>
    {/if}
    <Button class="w-full" type="submit" disabled={!!form?.success}>Vytvořit novou fakturu</Button>
</form>