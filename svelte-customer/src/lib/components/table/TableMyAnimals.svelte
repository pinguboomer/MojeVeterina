<script>
    import {
        Button,
        Heading,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import {onMount} from "svelte";

    let animals = [{name: 'Jan', species: 'Krokodýl'},
        {name: 'Bell', species: 'Pes'},
        {name: 'Test', species: 'Myš'}];

    onMount(() => {
        //TODO z databáze
        load()
    })

    function load() {

    }


</script>

<Heading tag="h1" class="mb-2">Moji mazlíčci</Heading>
<Table>
    <TableHead>
        <TableHeadCell>Jméno</TableHeadCell>
        <TableHeadCell>Druh</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each animals as animal}
            <TableBodyRow>
                <TableBodyCell>
                    {animal.name}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.species}
                </TableBodyCell>
                <TableBodyCell>
<!--                    TODO -->
                    <Button>Zobrazit vyšetření</Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>