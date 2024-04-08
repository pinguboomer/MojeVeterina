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
    import ConfirmDeleteReservations from "$lib/components/ConfirmDeleteReservations.svelte";
    import {formatDateWithHours} from "$lib/formateDate.js";
    //TODO přes api získat rezervace
    const animal1 = ["Pes", "Kočka", "Mamba černá", "Leguán Kubanský", "Narval"];
    const type = ["Očkování", "Zastřihování drábků", "Vyšetření", "Jiné"];

    function getValueFromArray(array) {
        let r = Math.floor(Math.random() * array.length);
        return array[r]
    }

    // function formatDateWithHours(date) {
    //     let day = date.getDate();
    //     let month = date.getMonth() + 1;
    //     let year = date.getFullYear();
    //     let hours = date.getHours();
    //     let minutes = date.getMinutes();
    //
    //
    //     if (day < 10) {
    //         day = '0' + day;
    //     }
    //     if (month < 10) {
    //         month = '0' + month;
    //     }
    //
    //     if (hours < 10) {
    //         hours = '0' + hours;
    //     }
    //     if (minutes < 10) {
    //         minutes = '0' + minutes;
    //     }
    //
    //     return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
    // }

    let formModal = false;

    let date = new Date('2024-08-05T15:14:30');

</script>

<Button on:click={() => (formModal = true)}>Zobrazit rezervace</Button>
<Modal bind:open={formModal} size="md" autoclose={false} class="w-full">
    <Heading tag="h3">Moje Rezervace</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>
                Datum
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
                        {formatDateWithHours(date)}
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        <P>{getValueFromArray(animal1)}</P>
                        <P>{getValueFromArray(type)}</P>
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        <ConfirmDeleteReservations disabled={date < new Date().getTime() - (60 * 60 * 24 * 1000)}/>
<!--                        <Button disabled={date < new Date().getTime() - (60 * 60 * 24 * 1000)} href="/addExaminations">Zrušit rezervaci</Button>-->
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</Modal>
