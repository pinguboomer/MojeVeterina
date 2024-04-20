<script>
    import {A, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";
    import {formatDate} from "$lib/formatDate.js"

    export let invoices = [];
    export let clients = [];

    function getClientName(id){
        let client = clients.find(x => x._id === id);
        return `${client.name} ${client.surname}<br/><span class="text-xs text-gray-500">${client.email}</span>`
    }

    const getFullPrice = function (items) {
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
        <TableHeadCell>Datum splatnosti</TableHeadCell>
        <TableHeadCell>Částka</TableHeadCell>
        <TableHeadCell>Splaceno</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each invoices as invoice}
            <TableBodyRow>
                <TableBodyCell>
                    {@html getClientName(invoice.client)}
                    <!--{invoice.client}-->
                </TableBodyCell>
                <TableBodyCell>
                    {formatDate(new Date(invoice.creationDate))}
                </TableBodyCell>
                <TableBodyCell>
                    {formatDate(new Date(invoice.dueDate))}
                </TableBodyCell>
                <TableBodyCell>
                    {getFullPrice(invoice.items)}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.paid? "Ano": "Ne"}
                </TableBodyCell>
                <TableBodyCell>
                    <A href="/invoices/{invoice._id}">Detail</A>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>