<script>
    import {
        A,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";

    import {formatDate} from "$lib/formateDate.js";
    export let invoices = [];

    const getFullPrice = function (items) {
        let fullPrice = 0;
        for (let item of items) {
            let price = item.price * item.quantity;
            fullPrice = fullPrice + price
        }

        return String(fullPrice + ' Kč');
    }

</script>



<Table>
    <TableHead>
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
                    {formatDate(new Date(invoice.creationDate))}
                </TableBodyCell>
                <TableBodyCell>
                    {formatDate(new Date(invoice.dueDate))}
                </TableBodyCell>
                <TableBodyCell>
                    {getFullPrice(invoice.items)}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.paid ? "Ano": "Ne"}
                </TableBodyCell>
                <TableBodyCell>
                    <A href="/invoices/{invoice._id}">Detail</A>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>
