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
    import {onMount} from "svelte";
    import {invoicesNumber} from "../../../stores/invoiceStore.js";
    import {formatDate} from "$lib/formateDate.js";

    let invoices = [];
    onMount(() => {
        console.log($invoicesNumber)
        //TODO načíst z DB
        loadData();

    })


    function loadData() {
        for (let i = 0; i < 10; i++) {

            const d1 = randomDate(new Date(2024, 0, 1), new Date());
            const d2 = randomDate(d1, new Date());
            let paid = Math.random() < 0.5;
            let price = Math.random() * 100;
            let invoice = {creationDate: formatDate(d1), dueDate: formatDate(d2), price: Math.round(price), paid: paid};
            invoices.push(invoice);
        }

        invoices = invoices

    }

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
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
                    {invoice.creationDate}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.dueDate}
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.price} Kč
                </TableBodyCell>
                <TableBodyCell>
                    {invoice.paid ? "ano": "ne"}
                </TableBodyCell>
                <TableBodyCell>
                    <!--                    TODO dodělat zobrazení-->
                    <Button href="/detailInvoices" on:click={() => {
                        invoicesNumber.set(7884524)
                    }}>Zobrazit detail</Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>
