<script>
    import {Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";

    export let invoices = [];
</script>

<Table hoverable={true}>
    <TableHead>
        <TableHeadCell>Klient</TableHeadCell>
        <TableHeadCell>Datum vytvoření</TableHeadCell>
        <TableHeadCell>Částka</TableHeadCell>
        <TableHeadCell>Splaceno</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each invoices as invoice}
            <TableBodyRow>
                <TableBodyCell>
                    {invoice.client}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.creationDate}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.paid}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.sex}
                </TableBodyCell>
                <TableBodyCell>
<!--                    TODO dodělat zobrazení-->
                    <Button>Zobrazit detail</Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>