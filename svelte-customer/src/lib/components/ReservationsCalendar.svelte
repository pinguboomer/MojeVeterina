<script>
    import {
        Heading,
        P,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import {formatDate} from "$lib/formateDate.js";
    import NewReservations from "$lib/components/forms/modal/NewReservations.svelte";
    import {afterUpdate} from "svelte";

    export let date;
    export let form;
    export let animals
    export let reservations


    afterUpdate(() => {
        reservations = reservations
    })


    function setHour(date, hour) {
        const newDate = new Date(date);
        newDate.setHours(hour + 1, 0, 0);
        return newDate.toISOString();
    }

</script>
<Heading tag="h3">{formatDate(date)}</Heading>
<Table>
    <TableHead>
        <TableHeadCell>
            Čas
        </TableHeadCell>
        <TableHeadCell>
            Stav
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
                    <P>{reservations.find(x => new Date(x.date).getHours() === i + 1) ? "obsazeno" : "volno"}</P>
                </TableBodyCell>
                <TableBodyCell class="border-solid border-2 border-gray-300">
                    {#if !reservations.find(x => new Date(x.date).getHours() === i + 1)}
                        <NewReservations
                                form={form}
                                animals={animals.map((animal) => { return { name: `${animal.name}`, value: animal._id } })}
                                date={setHour(date,i)}
                        />
                    {/if}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>