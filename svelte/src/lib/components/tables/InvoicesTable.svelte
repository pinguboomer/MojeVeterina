<script>
    import {Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";
    import {formatDate} from "$lib/formatDate.js"

    export let invoices = [];
    export let clients = [];

    function setNameClient(id){
        let client = clients.find(x => x._id === id);
        return String(client.name + " " + client.surname);
    }

    const getFullPrice = function (items, number) {
        let fullPrice = 0;
        for (let item of items) {
            console.log(item[2])
            let price = item.price * item.quantity;
            fullPrice = fullPrice + price
        }

        return String(fullPrice + ' Kč');
    }
</script>

<Table hoverable={true}>
    <TableHead>
        <TableHeadCell>Klient</TableHeadCell>
        <TableHeadCell>Datum vytvoření</TableHeadCell>
        <TableHeadCell>Částka</TableHeadCell>
        <TableHeadCell>Splaceno</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
<!--    TODO dodlěat datum splatnosti-->
    <TableBody>
        {#each invoices as invoice}
            <TableBodyRow>
                <TableBodyCell>
                    {setNameClient(invoice.client)}
                    <!--{invoice.client}-->
                </TableBodyCell>
                <TableBodyCell>
                    {formatDate(new Date(invoice.creationDate))}
                </TableBodyCell>
                <TableBodyCell>
                    {getFullPrice(invoice.items, invoice.number)}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.paid? "ano": "ne"}
                </TableBodyCell>
                <TableBodyCell>
                    <Button href="addInvoices/{invoice._id}">Zobrazit detail</Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>