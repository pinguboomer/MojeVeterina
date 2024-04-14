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

    export let reservations
    export let animals

    let formModal = false;

    let date = new Date();

    function getNameAnimal(id){
        return animals.find(x => x._id === id).name;
    }

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
            {#each reservations as reservations}
                <TableBodyRow>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        {formatDateWithHours(new Date(reservations.date))}
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        <P>{getNameAnimal(reservations.animal)}</P>
                        <P>{reservations.reason}</P>
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
<!--                        TODO dodělat delete-->
<!--                        <ConfirmDeleteReservations disabled={date < new Date().getTime() - (60 * 60 * 24 * 1000)}/>-->
                        <Button disabled={date < new Date().getTime() - (60 * 60 * 24 * 1000)} on:click={() => console.log(reservations)}>Zrušit rezervaci</Button>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</Modal>
