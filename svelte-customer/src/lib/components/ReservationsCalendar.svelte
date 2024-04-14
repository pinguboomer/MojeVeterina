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

    export let date;
    export let form;
    export let animals

    export let reservations


    //TODO přes api získat rezervace
    const clientName = ["Tomáš Němeček", "František Brýl", "Filip Macháček", "Václav Buřil"];
    const animal1 = ["Pes", "Kočka", "Mamba černá", "Leguán Kubanský", "Narval"];
    const type = ["Očkování", "Zastřihování drábků", "Vyšetření", "Jiné"];

    function getValueFromArray(array) {
        let r = Math.floor(Math.random() * array.length);
        return array[r]
    }

function setHour(date, hour){
        const newDate = new Date(date);
        newDate.setHours(hour + 1,0,0);
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
                Popis
            </TableHeadCell>
            <TableHeadCell>
            </TableHeadCell>
        </TableHead>
        <TableBody>
            {#each Array.from(Array(18).keys()).slice(7) as i}
                <TableBodyRow>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        {String((i + 1) + ':00' )}
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        <P>{getValueFromArray(clientName)}</P>
                        <P>{getValueFromArray(animal1)}</P>
                        <P>{getValueFromArray(type)}</P>
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        <NewReservations
                        form={form}
                        animals={animals.map((animal) => { return { name: `${animal.name}`, value: animal._id } })}
                        date={setHour(date,i)}
                        />
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>