<script>
    import {
        Button,
        Heading,
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

<Heading tag="h1">Moje Platby</Heading>

<Table hoverable={true} striped={true}>
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
                <!--    TODO dodlěat datum splatnosti-->
                <TableBodyCell>
                    {invoice.dueDate}
                </TableBodyCell>
                <TableBodyCell>
                    {getFullPrice(invoice.items)}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.paid ? "ano": "ne"}
                </TableBodyCell>
                <TableBodyCell>
                    <Button href="/myInvoices/{invoice._id}">Zobrazit detail1</Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>
