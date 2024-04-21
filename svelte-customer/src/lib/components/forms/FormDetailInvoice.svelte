<script>
    import {
        Button,
        Input,
        Label,
        Span,
        Table, TableBody, TableBodyCell,
        TableBodyRow, TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import {enhance} from "$app/forms";
    import {goto} from "$app/navigation";

    export let client = {}


    export let invoice = {
        client: '',
        items: []
    }

    let items = invoice.items;

    let suma = 0;

    function setSuma(){
        suma = 0;
        for (let item of items){
            suma = suma + (item.price * item.quantity);
        }
    }
    setSuma();

    console.log(invoice)
</script>

<div class="flex flex-col space-y-6">
    <Label class="space-y-2">
        <span>Plátce</span>
        <Input type="text" value={`${client.name} ${client.surname} (${client.email})`} disabled/>
    </Label>
    <Label class="space-y-2">
        <span>Datum vystavení</span>
        <Input type="date" value={invoice.creationDate?.split('T')[0]} disabled/>
    </Label>
    <Label class="space-y-2">
        <span>Datum splatnosti</span>
        <Input type="date" value={invoice.dueDate?.split('T')[0]} disabled/>
    </Label>
    <div class="border border-gray-300 rounded-md p-4 mb-4">
        <Input class="hidden" type="number" name="number_items" bind:value={items.length}></Input>
        <Table>
            <TableHead>
                <TableHeadCell>Položka</TableHeadCell>
                <TableHeadCell>Cena za jednotku</TableHeadCell>
                <TableHeadCell>Počet</TableHeadCell>
                <TableHeadCell>Cena položky</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each invoice.items as item , i}
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
    <div class="flex items-center justify-between mt-1 border-b-gray-300">
        <Span>Celková cena:</Span>
        <Span>{suma} Kč</Span>
    </div>
    <div class="flex gap-4">
        <Button href="/invoices/{invoice._id}/pdf" class="w-full">PDF</Button>
<!--        <form method="POST" class="" use:enhance={() => {-->
<!--                return async ({result}) => {-->
<!--                    if (!result.data.success) {-->
<!--                        return alert('Chyba při odstranění faktury.');-->
<!--                    }-->
<!--                    goto('/invoices');-->
<!--                };-->
<!--            }}-->
<!--        >-->
<!--            <input type="hidden" hidden name="id" value={invoice._id}>-->
<!--            <Button type="submit">Odstranit</Button>-->
<!--        </form>-->
    </div>
</div>