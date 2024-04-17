<script>
    import {
        Button,
        Heading, Input,
        Modal, P, Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import {formatDateWithHours} from "$lib/formateDate.js";
    import {enhance} from "$app/forms";



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
                        <form method="post" use:enhance>
                            <Input type="text" name="id" bind:value={reservations._id} class="hidden"/>
                            <Button type="submit" disabled={date < new Date().getTime() - (60 * 60 * 24 * 1000)}>Zrušit rezervaci</Button>
                        </form>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</Modal>
