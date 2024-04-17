<script>
    import {
        Button,
        Heading, Input,
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
    import {afterUpdate, onMount} from "svelte";

    export let date;
    export let form;
    export let animals

    export let reservations


    $:res = reservations;

    onMount(() => {

        console.log("cccccccccccc")
    })



    afterUpdate(() => {
        reservations = reservations
        console.log("bbbbbbbbbbbbbb")
    })

    //TODO přes api získat rezervace
    const clientName = ["Tomáš Němeček", "František Brýl", "Filip Macháček", "Václav Buřil"];
    const animal1 = ["Pes", "Kočka", "Mamba černá", "Leguán Kubanský", "Narval"];
    const type = ["Očkování", "Zastřihování drábků", "Vyšetření", "Jiné"];

    function findOutReservation(i){
        console.log("aaaaaaaaaaaaaaa")
        for (let reservation of reservations){
            if (new Date(reservation.date).getHours() === i){
                return reservation
                }
        }

        return null;
    }
    function getValueFromArray(array) {
        let r = Math.floor(Math.random() * array.length);
        return array[r]
    }

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
<!--                    //TODO udělat lépe-->
                    {#each reservations as reservation}
                        {#if new Date(reservation.date).getHours() === i +1}
                    <P>{findOutReservation(i+1) === null ? "volno" : "obsazeno"}</P>
<!--                    <P>{getValueFromArray(animal1)}</P>-->
<!--                    <P>{getValueFromArray(type)}</P>-->
                            {/if}
                        {/each}
                </TableBodyCell>
                <TableBodyCell class="border-solid border-2 border-gray-300">
                    <NewReservations
                            form={form}
                            animals={animals.map((animal) => { return { name: `${animal.name}`, value: animal._id } })}
                            date={setHour(date,i)}
                    />
<!--                    <Button on:click={() => console.log(res)}>aaaa</Button>-->
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>