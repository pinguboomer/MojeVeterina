<script>
    import {
        Button,
        Heading,
        Modal, P, Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import {formatDate} from "$lib/formatDate.js";

    let formModal = false;
    export let date;

    export let animals
    export let reservations

    export let clients

</script>

<Button on:click={() => (formModal = true)}>Zobrazit rezervace</Button>
<Modal bind:open={formModal} size="md" autoclose={false} class="w-full">
    <Heading tag="h3">{formatDate(date)}</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>
                Čas
            </TableHeadCell>
            <TableHeadCell>
                Popis
            </TableHeadCell>
            <TableHeadCell>
            </TableHeadCell>
        </TableHead>
        <TableBody>
            {#each Array.from(Array(18).keys()).slice(7) as i}
                <TableBodyRow>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        {String((i + 1) + ':00')}
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        {#if reservations.find(x => new Date(x.date).getHours() === i + 1)}
                            <P>{clients.find(x => x._id === reservations.find(x => new Date(x.date).getHours() === i + 1).user).name}
                                {clients.find(x => x._id === reservations.find(x => new Date(x.date).getHours() === i + 1).user).surname}
                            </P>
                            <P>{
                                animals.find(x => x._id === reservations.find(x => new Date(x.date).getHours() === i + 1).animal).species
                            }</P>
                            <P>
                                {reservations.find(x => new Date(x.date).getHours() === i + 1).reason}
                            </P>
                        {/if}
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        {#if reservations.find(x => new Date(x.date).getHours() === i + 1)}
                            <Button href="/animals/{animals.find(x => x._id === reservations.find(x => new Date(x.date).getHours() === i + 1).animal)._id}">
                                Detail zvířete
                            </Button>
                        {/if}
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</Modal>