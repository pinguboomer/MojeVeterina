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
    import {owner,animal} from "../../stores/reservationsStore.js";
    export let date;

    //TODO přes api získat rezervace
    const clientName = ["Tomáš Němeček", "František Brýl", "Filip Macháček", "Václav Buřil"];
    const animal1 = ["Pes", "Kočka", "Mamba černá", "Leguán Kubanský", "Narval"];
    const type = ["Očkování", "Zastřihování drábků", "Vyšetření", "Jiné"];

    function getValueFromArray(array) {
        let r = Math.floor(Math.random() * array.length);
        return array[r]
    }

    function setStoreValue(owner1, animal1){
        $owner = owner1
        $animal = animal1
    }



</script>
<Heading tag="h3">{date}</Heading>
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
                        {i + 1}
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        <P>{getValueFromArray(clientName)}</P>
                        <P>{getValueFromArray(animal1)}</P>
                        <P>{getValueFromArray(type)}</P>
                    </TableBodyCell>
                    <TableBodyCell class="border-solid border-2 border-gray-300">
                        <Button href="/addExaminations" on:click={() => setStoreValue(getValueFromArray(clientName), getValueFromArray(animal1))}>Zahajit vyšetření</Button>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>