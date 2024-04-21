<script>
    import {
        A,
        Button,
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
    export let reservations

    export let clients



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
                <TableBodyCell>
                    {#if reservations.find(x => new Date(x.date).getHours() === i + 1)}
                        <A href="/animals/{animals.find(x => x._id === reservations.find(x => new Date(x.date).getHours() === i + 1).animal)._id}">
                           Detail
                        </A>
                    {/if}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>