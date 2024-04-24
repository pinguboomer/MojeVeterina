<script>
    import {
        A,
        Heading,
        P, Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import {formatDate} from "$lib/formatDate.js";


    export let date;

    export let animals
    export let reservations = []

    export let clients

    let reservationsExtended

    $: reservationsExtended = reservations.map(reservation => {
        const client = clients.find(client => client._id === reservation.user);
        const animal = animals.find(animal => animal._id === reservation.animal);
        return {...reservation, client, animal};
    });
</script>
<Heading tag="h2" class="mb-4 text-2xl">{formatDate(date)}</Heading>
<Table>
    <TableHead>
        <TableHeadCell width="80">
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
                <TableBodyCell>
                    {String((i + 1) + ':00')}
                </TableBodyCell>
                <TableBodyCell>
                    {#if reservationsExtended.find(x => new Date(x.date).getHours() === i + 1)}
                        <P class="mb-2">
                            {reservationsExtended.find(x => new Date(x.date).getHours() === i + 1)?.reason ?? ''}
                        </P>
                        <P class="text-sm">
                            {reservationsExtended.find(x => new Date(x.date).getHours() === i + 1)?.animal?.species ?? ''} - {reservationsExtended.find(x => new Date(x.date).getHours() === i + 1)?.animal?.name ?? ''}
                        </P>
                        <P class="text-sm text-gray-500">
                            {reservationsExtended.find(x => new Date(x.date).getHours() === i + 1)?.client?.name ?? ''} {reservationsExtended.find(x => new Date(x.date).getHours() === i + 1)?.client?.surname ?? ''} ({reservationsExtended.find(x => new Date(x.date).getHours() === i + 1)?.client?.email ?? ''})
                        </P>
                    {/if}
                </TableBodyCell>
                <TableBodyCell>
                    {#if reservations.find(x => new Date(x.date).getHours() === i + 1)}
                        <A href="/animals/{animals.find(x => x._id === reservations.find(x => new Date(x.date).getHours() === i + 1).animal)?._id}">
                           Detail
                        </A>
                    {/if}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>