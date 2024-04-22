<script>
    import {
        Button,
        Heading, Helper, Input,
        Modal, P, Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import {formatDateWithHours} from "$lib/formateDate.js";
    import {enhance} from "$app/forms";
    import {invalidateAll} from "$app/navigation";


    export let reservations
    export let animals

    let formModal = false;

    let date = new Date();

    function getNameAnimal(id){
        const animal = animals.find(x => x._id === id)
        return `${animal.name} (${animal.species})`;
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
            {#each reservations as reservation}
                <TableBodyRow>
                    <TableBodyCell width="160">
                        {formatDateWithHours(new Date(reservation.date))}
                    </TableBodyCell>
                    <TableBodyCell>
                        {reservation.reason}
                        <br/>
                        <span class="text-sm text-gray-500">{getNameAnimal(reservation.animal)}</span>
                    </TableBodyCell>
                    <TableBodyCell width="80">
                        <form method="post" use:enhance={() => {
                            return async ({result}) => {
                                if (result.data.success) {
                                    reservations = reservations.filter(x => x._id !== reservation._id)
                                    return
                                }
                                alert('Nastala neočekávaná chyba rušení rezervace.')
                            };
                        }}>
                            <Input type="text" name="id" bind:value={reservation._id} class="hidden"/>
                            <Button type="submit" disabled={date < new Date().getTime() - (60 * 60 * 24 * 1000)}>Zrušit</Button>
                        </form>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
            {#if reservations.length === 0}
                <TableBodyRow>
                    <TableBodyCell colspan="3" class="text-center">Žádné rezervace</TableBodyCell>
                </TableBodyRow>
            {/if}
        </TableBody>
    </Table>
</Modal>
